import { MiddlewareConsumer, Module, NestModule} from "@nestjs/common";

import { logger} from "./logger.middleware";
import { UsersModule } from './users/users.module';
import { IssuesModule } from './issues/issues.module';
import { IssuesController } from "./issues/issues.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "./config/config.service";

@Module({
  imports: [
    IssuesModule,
    UsersModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(logger)
      .forRoutes(IssuesController);
  }
}
