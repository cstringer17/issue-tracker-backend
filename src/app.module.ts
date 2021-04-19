import { MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
import { IssuesModule } from "./issue/issues.module";
import { logger} from "./logger.middleware";
import { IssuesController } from "./issue/issues.controller";

import { UsersModule } from './users/users.module';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [IssuesModule, UsersModule],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(logger)
      .forRoutes(IssuesController);
  }
}
