import { Body, Controller, Headers, HttpException, Post, UseGuards } from "@nestjs/common";
import { MoviesControllerDto } from "./movies.controller.dto";
import { GeneralLogger } from "src/common/utils/Logger";
import { MovieService } from "src/services/Movies/movies.service";
import { AuthGuard } from "src/common/guards/Auth.guard";
import { JwtPayload, verify } from "jsonwebtoken";
import { EnvManager } from "src/common/utils/EnvManager";

@Controller("movies")
export class MoviesController {

  private logger = new GeneralLogger(MoviesController.name);

  constructor(private movieService: MovieService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createMovie(@Body() data: MoviesControllerDto, @Headers("authorization") authorization:string) {
    
    try {
      this.logger.log("Movie data received", data);

      const authHeader = authorization.split(" ")[1];

      const headerDecoded = verify(authHeader, EnvManager.getEnvOrThrow(process.env.JWT_SECRET)) as JwtPayload;

      if(data.userRating > 100 || data.userRating < 0) {
        this.logger.error("User rating must be between 0 and 100", data);
        throw new HttpException("User rating must be between 0 and 10", 400);
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
}