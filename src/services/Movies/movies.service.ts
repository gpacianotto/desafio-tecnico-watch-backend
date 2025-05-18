import { HttpException, Injectable } from "@nestjs/common";
import { GeneralLogger } from "src/common/utils/Logger";
import { MoviesControllerDto } from "src/controllers/Movies/movies.controller.dto";
import { Movie } from "src/entities/Movie";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class MovieService {
  private repository: Repository<Movie>
  private readonly logger = new GeneralLogger(MovieService.name)

  constructor(private dataSource: DataSource) {
    this.repository = dataSource.getRepository(Movie);
  }

  async createMovie(data: MoviesControllerDto, userId: string) {
    try {
      const newMovie = await this.repository.save({
        title: data.title,
        year: data.year,
        sinopse: data.sinopse,
        userRating: data.userRating,
        userConsiderations: data.userConsiderations,
        userId,
        imageUrl: data.imageUrl,
        imdbId: data.imdbId
      })

      return newMovie;
    }
    catch(err) {
      this.logger.error("Erro ao tentar cadastrar filme", err)

      throw err;
    }
  }

  async getMovies(userId: string, page: number) {
    try {
      const movies = await this.repository.find({
        where: { userId },
        skip: (page - 1) * 10,
        take: 10
      })

      return movies;
    }
    catch(err) {
      this.logger.error("Erro ao tentar buscar filmes", err)

      throw err;
    }
  }

  async countMovies(userId: string) {
    try {
      const count = await this.repository.count({
        where: { userId }
      })

      return count;
    }
    catch(err) {
      this.logger.error("Erro ao tentar contar filmes", err)

      throw err;
    }
  }

  async getMovieById(movieId: string, userId: string) {
    try {
      const movie = await this.repository.findOne({
        where: {imdbId: movieId, userId}
      });

      if(!movie) {
        this.logger.error("Filme não encontrado", {movieId, userId})

        return false;
      }

      return movie;
    }
    catch(err) {
      this.logger.error("Erro ao tentar buscar filme", err)

      throw err;
    }
  }

  async deleteMovie(movieId: string, userId: string) {
    try {
      const movie = await this.repository.findOne({
        where: {imdbId: movieId, userId}
      });

      if(!movie) {
        this.logger.error("Filme não encontrado", {movieId, userId})

        throw new HttpException("Filme não encontrado", 404);
      }

      await this.repository.delete(movie.id);
      this.logger.log("Filme deletado com sucesso", {movieId, userId})
      return true;
    }
    catch(err) {
      this.logger.error("Erro ao tentar deletar filme", err)

      throw err;
    }
  }

}