import { Body, Controller, Get, Headers, HttpException, Post, UseGuards } from "@nestjs/common";
import { GeneralLogger } from "src/common/utils/Logger";
import { AuthLoginControllerDto } from "./auth.controller.dto";
import { UserService } from "src/services/User/user.service";
import {compareSync} from "bcrypt";
import {sign} from "jsonwebtoken"
import { EnvManager } from "src/common/utils/EnvManager";
import { AuthGuard } from "src/common/guards/Auth.guard";
import { JWTDataExtracter } from "src/common/utils/JWTDataExtracter";

@Controller("auth")
export class AuthController {
  private readonly logger = new GeneralLogger(AuthController.name);
  constructor(private userService: UserService) {
    // Constructor logic if needed
  }
  private deletePassword(data: any): any {
    delete data.password;
    return data;
  }

  @Post("login")
  async login(@Body() data: AuthLoginControllerDto) {
    try {
      this.logger.log("Login data received", data);

      const user = await this.userService.findUserByEmail(data.email);

      if (!user) {
        this.logger.warn("User not found", data.email);
        throw new HttpException("User not found", 404);
      }

      const passwordMatch = compareSync(data.password, user.password);

      if(!passwordMatch) {
        this.logger.warn("Password does not match", data.email);

        throw new HttpException("Password doesn't match", 404);
      }


      return {
        message: "Login successful",
        data: {data: this.deletePassword(user), token: sign({id: user.id}, EnvManager.getEnvOrThrow(process.env.JWT_SECRET), {expiresIn: "1h"})},
      };
    }
    catch (error) {
      this.logger.error("Error during login", error);
      throw error;
    }
  }
  @Get("user")
  @UseGuards(AuthGuard)
  async getUser(@Headers("authorization") authorization: string) {
    try {
      this.logger.log("Get user request received");

      const headerDecoded = JWTDataExtracter.extractUserIdFromToken(authorization);

      const user = await this.userService.findUserById(headerDecoded.id);

      if (!user) {
        this.logger.warn("User not found", headerDecoded.id);
        throw new HttpException("User not found", 404);
      }

      return {
        message: "User retrieved successfully",
        data: this.deletePassword(user),
      };
    }
    catch (error) {
      this.logger.error("Error retrieving user", error);
      throw error;
    }

  }
}