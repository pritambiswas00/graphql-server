import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [],
  providers: [UserService, UserResolver, JwtService],
  exports:[UserService]
})
export class UserModule {}
