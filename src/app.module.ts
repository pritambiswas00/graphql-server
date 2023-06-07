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
import { DatabaseModule } from './DataBase/database.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: join(process.cwd(),".env"),
    load:[loader],
    validationSchema: configValidator
  }),AuthModule, UserModule, MoviesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
