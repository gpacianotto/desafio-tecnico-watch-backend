import { Injectable } from "@nestjs/common";
import { GeneralLogger } from "src/common/utils/Logger";
import { OnboardingControllerDto } from "src/controllers/Onboarding/onboarding.controller.dto";
import { User } from "src/entities/User";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UserService {
  
  private respository: Repository<User>
  private readonly logger = new GeneralLogger(UserService.name);

  constructor(private dataSource: DataSource) {
    this.respository = dataSource.getRepository(User);
  }

  // Example method to create a new user
  async createUser(userData: OnboardingControllerDto) {
    try {
      this.logger.log("Creating user", userData);
      const newUser = await this.respository.save({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });
      return newUser;
    } 
    catch (error) {
      this.logger.error("Error creating user", error);
      throw error;
    }
  }
}