import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Jwt, JwtPayload, verify } from "jsonwebtoken"
import { EnvManager } from "../utils/EnvManager";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  validateRequest(request: any): boolean {
    const authHeader = request.headers["authorization"];

    if(!authHeader) {
      return false
    }

    const authentication = authHeader.split(" ");

    if(authentication.length !== 2) {
      return false
    }

    if(authentication[0] !== "Bearer") {
      return false
    }

    const token = authentication[1];
    const decodedToken = verify(token, EnvManager.getEnvOrThrow(process.env.JWT_SECRET)) as JwtPayload;

    if(!decodedToken) {
      return false
    }

    return true
  }
}