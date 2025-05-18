import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class OnboardingControllerDto {
  @IsNotEmpty({ message: "name is required" })
  @IsString({message: "name must be a string"})
  name: string;

  @IsNotEmpty({ message: "email is required" })
  @IsString({message: "email must be a string"})
  @IsEmail()
  email: string;

  @IsString({message: "password must be a string"})
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }, {message: "password must have at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol"})
  @IsNotEmpty({ message: "password is required" })
  password: string;
}