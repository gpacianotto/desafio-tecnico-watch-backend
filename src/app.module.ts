import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvManager } from './common/utils/EnvManager';
import { User } from './entities/User';
import { OnboardingController } from './controllers/Onboarding/onboarding.controller';
import { UserService } from './services/User/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env"
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: EnvManager.getEnvOrThrow(process.env.DB_HOST),
      port: parseInt(EnvManager.getEnvOrThrow(process.env.DB_PORT)),
      username: EnvManager.getEnvOrThrow(process.env.POSTGRES_USER),
      password: EnvManager.getEnvOrThrow(process.env.POSTGRES_PASSWORD),
      database: EnvManager.getEnvOrThrow(process.env.POSTGRES_DB),
      entities: [
        User,

      ],
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  controllers: [
    AppController,
    OnboardingController
  ],
  providers: [AppService, UserService],
})
export class AppModule {}
