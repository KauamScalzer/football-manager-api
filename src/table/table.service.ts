import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match, Team, Tournament, TournamentTeam } from 'src/db';
import { Repository } from 'typeorm';
import * as XLSX from 'xlsx';

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
    @InjectRepository(TournamentTeam)
    private readonly tournamentTeamRepository: Repository<TournamentTeam>,
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>,
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  async insert() {
    const pathFile = process.cwd() + '/src/table/a.xlsx';
    const workbook = XLSX.readFile(pathFile);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    for (const row of sheetData) {
      const teamA = await this.teamRepository.findOne({
        where: { name: row[0] },
      });
      const teamB = await this.teamRepository.findOne({
        where: { name: row[2] },
      });
      const dateString = '16/04Terça21:30';
      const dateParts = dateString.split(/[^\d]+/);
      const monthNames = [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ];
      const monthIndex = monthNames.indexOf(dateParts[1].substring(2));
      const date = new Date(
        Date.UTC(
          new Date().getFullYear(),
          monthIndex,
          +dateParts[0],
          +dateParts[2],
          +dateParts[3],
        ),
      );
      await this.matchRepository.save({
        tounamentId: 1,
        round: row[5],
        date: date,
        homeTeamId: teamA.id,
        homeTeamGols: row[1] === 'x' ? null : row[1],
        awayTeamId: teamB.id,
        awayTeamGols: row[3] === 'x' ? null : row[3],
      });
    }
  }

  async get(id: number) {
    const tournament = await this.tournamentRepository.findOne({
      where: { id: id },
    });

    if (tournament) {
      const result = [];
      const tournamentTeams = await this.tournamentTeamRepository.find({
        where: { tounamentId: tournament.id },
        relations: ['team'],
      });

      for (const tournamentTeam of tournamentTeams) {
        const teamId = tournamentTeam.teamId;

        // Buscar os últimos 5 jogos do time, seja como mandante ou visitante
        const matches = await this.matchRepository
          .createQueryBuilder('match')
          .where('match.homeTeamId = :teamId OR match.awayTeamId = :teamId', {
            teamId,
          })
          .orderBy('match.date', 'DESC')
          .limit(5)
          .getMany();

        // Inicializar contadores
        let goals = 0;
        let wins = 0;
        let loses = 0;
        let draw = 0;

        // Processar os resultados dos últimos 5 jogos
        matches.forEach((match) => {
          if (match.homeTeamId === teamId) {
            // Time jogou como mandante
            goals += match.homeTeamGols || 0;
            if (match.homeTeamGols > match.awayTeamGols) {
              wins += 1;
            } else if (match.homeTeamGols < match.awayTeamGols) {
              loses += 1;
            } else {
              draw += 1;
            }
          } else {
            // Time jogou como visitante
            goals += match.awayTeamGols || 0;
            if (match.awayTeamGols > match.homeTeamGols) {
              wins += 1;
            } else if (match.awayTeamGols < match.homeTeamGols) {
              loses += 1;
            } else {
              draw += 1;
            }
          }
        });

        // Adicionar os resultados ao array de resultados
        result.push({
          team: tournamentTeam.team.name,
          teamImage: tournamentTeam.team.urlImage,
          goals,
          wins,
          loses,
          draw,
          points: wins * 3 + draw,
          games: wins + draw + loses,
          recentMatches: matches.map((match) => {
            if (match.homeTeamId === teamId) {
              if (match.homeTeamGols > match.awayTeamGols) {
                return 'win';
              } else if (match.homeTeamGols < match.awayTeamGols) {
                return 'lose';
              } else {
                return 'draw';
              }
            } else {
              if (match.awayTeamGols > match.homeTeamGols) {
                return 'win';
              } else if (match.awayTeamGols < match.homeTeamGols) {
                return 'lose';
              } else {
                return 'draw';
              }
            }
          }),
        });
      }

      // Ordenar os resultados
      result.sort((a, b) => {
        if (b.points !== a.points) {
          return b.points - a.points;
        } else if (b.wins !== a.wins) {
          return b.wins - a.wins;
        } else {
          return b.goals - a.goals;
        }
      });

      return {
        tournamentName: tournament.name,
        table: result,
      };
    }
  }

  async getLastThreeMatchesWithTeams(teamId: number) {
    // Buscar as 3 últimas partidas do time, seja como mandante ou visitante,
    // junto com os times relacionados
    const matches = await this.matchRepository
      .createQueryBuilder('match')
      .innerJoinAndSelect('match.homeTeam', 'homeTeam')
      .innerJoinAndSelect('match.awayTeam', 'awayTeam')
      .where('match.homeTeamId = :teamId OR match.awayTeamId = :teamId', {
        teamId,
      })
      .orderBy('match.date', 'DESC')
      .limit(5)
      .getMany();

    // Mapear os dados para o formato desejado

    return matches;
  }

  async getMatch(id: number) {
    const match = await this.matchRepository.findOne({
      where: { id: id },
      relations: ['homeTeam', 'awayTeam'],
    });
    return match;
  }
}
