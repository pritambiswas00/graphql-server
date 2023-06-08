import { Module } from '@nestjs/common';
import { AppController } from '~/app.controller';
import { AppService } from '~/app.service';
import { AuthModule } from '~/auth/auth.module';
import { UserModule } from '~/user/user.module';
import { MoviesModule } from '~/movies/movies.module';
import { ConfigModule } from "@nestjs/config";
import { loader } from '~/config/loader';
import { configValidator } from '~/config/validator';
import { join } from 'path';
import { DatabaseModule } from '~/DataBase/database.module';
import { GraphQLModule,  } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig,  } from "@nestjs/apollo"
import { APP_FILTER } from '@nestjs/core';
import { GraphqlErrorFilter } from '~/httpErrorHandling';
import { ReviewModule } from '~/review/review.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: join(process.cwd(), ".env"),
    load: [loader],
    validationSchema: configValidator
  }), GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), "src/schema.gql"),
  }), AuthModule, UserModule, MoviesModule, DatabaseModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: GraphqlErrorFilter
  }],
})
export class AppModule { }
