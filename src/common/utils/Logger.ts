import { Logger } from "@nestjs/common";

export class GeneralLogger extends Logger {
  constructor(name: string) {
    super(name, { timestamp: true })
  }

  log(message: string, data?: any): void {
    data ?
      super.log(
        message + ": \n" + JSON.stringify(data)
      )
      :
      super.log(message)
  }

  error(message: unknown, data?: any, error?: string): void {
    data ?
      error ?
        super.error(
          message + ": \n" + JSON.stringify(data),
          error
        )
        :
        super.error(
          message + ": \n" + JSON.stringify(data)
        )
      :
      error ?
        super.error(
          message,
          error
        )
        :
        super.error(message)
  }

  debug(message: unknown, data?: any): void {
    data ?
      super.debug(
        message + ": \n" + JSON.stringify(data)
      )
      :
      super.debug(message)
  }
}