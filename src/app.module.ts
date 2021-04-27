import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { taskProviders } from './task/task.providers';
import { TaskResolver } from './task/task.resolver';

@Module({
  imports: [GraphQLModule.forRoot({}), UserModule, DatabaseModule, TaskModule],
  controllers: [AppController],
  providers: [
    AppService,
    UserService,
    UserResolver,
    TaskService,
    TaskResolver,
    ...databaseProviders,
    ...userProviders,
    ...taskProviders,
    
  ],
})
export class AppModule {}