import { HttpException, HttpStatus } from "@nestjs/common";

export class EnvNotFoundError extends HttpException {
  constructor() {
    super(
      'Servidor não configurado corretamente, contacte os admnistradores do sistema!',
      HttpStatus.FORBIDDEN
    );
  }
}