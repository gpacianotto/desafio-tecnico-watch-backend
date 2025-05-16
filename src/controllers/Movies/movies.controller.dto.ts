import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber } from "class-validator";

@Injectable()
export class MoviesControllerDto {
  @IsNotEmpty({ message: "title is required" })
  title: string;

  @IsNotEmpty({ message: "year is required" })
  year: string;
  
  @IsNotEmpty({ message: "sinopse is required" })
  sinopse: string;
  
  @IsNotEmpty({ message: "userRating is required" })
  @IsNumber({maxDecimalPlaces: 2}, { message: "userRating must be a number"})
  userRating: number;
  
  @IsNotEmpty({ message: "userConsiderations is required" })
  userConsiderations: string;
}