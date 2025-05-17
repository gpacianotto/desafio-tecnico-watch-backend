import { JwtPayload, verify } from "jsonwebtoken";
import { EnvManager } from "./EnvManager";

export class JWTDataExtracter {

  static extractUserIdFromToken(token: string): JwtPayload {
    const bearer = token.split(" ")[1];
    const decodedPayload = verify(bearer, EnvManager.getEnvOrThrow(process.env.JWT_SECRET)) as JwtPayload;
    return decodedPayload;
  }

}
