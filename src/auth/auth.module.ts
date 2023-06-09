import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from '~/auth/auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './strategy/local-strategy';
import { PassportModule } from '@nestjs/passport';
import { GQLAuthGuard } from './Guards/local.guard';
import { UserModule } from '~/user/user.module';
import { MoviesModule } from '~/movies/movies.module';
import { ReviewModule } from '~/review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './Guards/jwt.guard';
import { JwtStrategy } from './strategy/jwt.strategy';


@Module({
  imports:[PassportModule, UserModule, MoviesModule, ReviewModule, 
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:async(configService:ConfigService)=>({
        secret: configService.get('JWT_SECRET'),
        signOptions:{expiresIn: configService.get('JWT_EXPIRES_IN')}
       })
})
],
  providers: [AuthService, AuthResolver, JwtService, LocalStrategy, GQLAuthGuard, JwtAuthGuard, JwtStrategy],
  exports:[]
})
export class AuthModule {}
