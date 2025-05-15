import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class AuthLoginControllerDto {

  @IsNotEmpty({ message: "email is required" })
  @IsString({message: "email must be a string"})
  @IsEmail()
  email: string;

  @IsString({message: "password must be a string"})
  @IsNotEmpty({ message: "password is required" })
  password: string;
}