import { Controller, MiddlewareConsumer, Module, NestModule, Post, UseGuards, Request } from "@nestjs/common";

import { logger} from "./logger.middleware";
import { UsersModule } from './users/users.module';
import { IssuesModule } from './issues/issues.module';
import { IssuesController } from "./issues/issues.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "./config/config.service";
import { AuthModule } from './auth/auth.module';
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AuthService } from "./auth/auth.service";


@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}

@Module({
  imports: [
    AuthModule,
    IssuesModule,
    UsersModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    AuthModule
  ],
  controllers:[
    AuthController
  ]
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(logger)
      .forRoutes(IssuesController);
  }
}


