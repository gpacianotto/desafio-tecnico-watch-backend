import { Body, Controller, Delete, Get, Headers, HttpException, Post, Query, UseGuards } from "@nestjs/common";
import { MoviesControllerDto } from "./movies.controller.dto";
import { GeneralLogger } from "src/common/utils/Logger";
import { MovieService } from "src/services/Movies/movies.service";
import { AuthGuard } from "src/common/guards/Auth.guard";
import { JwtPayload, verify } from "jsonwebtoken";
import { EnvManager } from "src/common/utils/EnvManager";
import { JWTDataExtracter } from "src/common/utils/JWTDataExtracter";

@Controller("movies")
export class MoviesController {

  private logger = new GeneralLogger(MoviesController.name);

  constructor(private movieService: MovieService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createMovie(@Body() data: MoviesControllerDto, @Headers("authorization") authorization:string) {
    
    try {
      this.logger.log("Movie data received", data);

      const headerDecoded = JWTDataExtracter.extractUserIdFromToken(authorization);

      if(data.userRating > 5 || data.userRating < 0) {
        this.logger.error("User rating must be between 0 and 5", data);
        throw new HttpException("User rating must be between 0 and 5", 400);
      }

      const existingMovie = await this.movieService.getMovieById(data.imdbId, headerDecoded.id);

      if(existingMovie) {
        this.logger.error("Movie already exists", data);
        throw new HttpException("Filme já cadastrado para esse usuário", 400);
      }

      const newMovie = await this.movieService.createMovie(data, headerDecoded.id);

      return {
        message: "Movie created successfully",
        data: newMovie
      };
    }
    catch (error) {
      this.logger.error("Error creating movie", error);
      throw error;
    }
  }

  @Get()
  @UseGuards(AuthGuard)
  async getMovies(@Headers("authorization") authorization:string, @Query("page") page:string) {
    try {
      this.logger.log("Get movies request received", {page});

      const authHeader = authorization.split(" ")[1];

      const headerDecoded = verify(authHeader, EnvManager.getEnvOrThrow(process.env.JWT_SECRET)) as JwtPayload;

      const movies = await this.movieService.getMovies(headerDecoded.id, parseInt(page));

      return {
        message: "Movies retrieved successfully",
        data: movies
      };
    }
    catch (error) {
      this.logger.error("Error retrieving movies", error);
      throw error;
    }
  }

  @Delete()
  @UseGuards(AuthGuard)
  async deleteMovie(@Headers("authorization") authorization:string, @Query("id") id:string) {
    try {
      this.logger.log("Delete movie request received", {id});

      const jwt = JWTDataExtracter.extractUserIdFromToken(authorization);

      const deletedMovie = await this.movieService.deleteMovie(id, jwt.id);

      return {
        message: "Movie deleted successfully",
        data: deletedMovie
      };
    }
    catch (error) {
      this.logger.error("Error deleting movie", error);
      throw error;
    }
  }
}