import { Module } from '@nestjs/common';
import { AuthModule } from '~/auth/auth.module';
import { ConfigModule } from "@nestjs/config";
import { loader } from '~/config/loader';
import { configValidator } from '~/config/validator';
import { join } from 'path';
import { DatabaseModule } from '~/DataBase/database.module';
import { GraphQLModule, } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig, } from "@nestjs/apollo"
import { GraphQLError, } from 'graphql';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: join(process.cwd(), ".env"),
    load: [loader],
    validationSchema: configValidator
  }), GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    formatError: (error: GraphQLError) => {
      const graphQLFormattedError = {
        message: error.message,
      };
      return graphQLFormattedError;
    }
  }),
    AuthModule, DatabaseModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
