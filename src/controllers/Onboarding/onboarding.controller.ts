import { Body, Controller, Post } from "@nestjs/common";
import { OnboardingControllerDto } from "./onboarding.controller.dto";
import { GeneralLogger } from "src/common/utils/Logger";
import { User } from "src/entities/User";
import { UserService } from "src/services/User/user.service";
import {hashSync} from "bcrypt"
import { hash } from "crypto";

@Controller("onboarding")
export class OnboardingController {

  private readonly logger = new GeneralLogger(OnboardingController.name);

  constructor(private userService: UserService) {
    
  }

  private deletePassword(data: any): any {
    delete data.password;
    return data;
  }

  @Post()
  async onboarding(@Body() data: OnboardingControllerDto) {
    try {
      this.logger.log("Onboarding data received", data);

      const newUser = {...data, password: hashSync(data.password, 10)};

      const userCreated = await this.userService.createUser(newUser);

      return {  
        message: "Onboarding completed successfully",
        data: this.deletePassword(userCreated),
      };
    }
    catch (error) {
      this.logger.error("Error during onboarding", error);
      

      throw error;
    }
    
  }
}