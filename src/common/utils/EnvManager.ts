import { Logger } from "@nestjs/common";
import { EnvNotFoundError } from "src/common/errors/EnvNotFoundError";

export class EnvManager {

  public static getEnvOrThrow(env: string | undefined): string {
    if (!env) {
      Logger.error(`env ${env} não encontrada!`)

      throw new EnvNotFoundError()
    }

    return env
  }
  public static getEnvOrThrowInt(env: string | undefined): number {
    return parseInt(this.getEnvOrThrow(env));
  }

}