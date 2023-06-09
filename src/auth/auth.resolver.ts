import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from '~/auth/auth.service';
import { LoginUserInput } from '~/@generated/user/login.user';
import { AccessToken } from '~/@generated/session/access-token';
import { GraphQLError } from 'graphql';
import { UseGuards } from '@nestjs/common';
import { UserCreateInput } from '~/@generated/user/user-create.input';
import { GQLAuthGuard } from '~/auth/Guards/local.guard';
import { User } from '~/@generated/user/user.model';


@Resolver(of => User)
export class AuthResolver {
     constructor(private authService: AuthService) { }

     @Mutation(() => AccessToken)
     @UseGuards(GQLAuthGuard)
     public async login(@Args("user") user: LoginUserInput): Promise<AccessToken> {
          try {
               return await this.authService.login(user);
          } catch (error) {
               throw new GraphQLError(error)
          }
     }

     @Mutation(() => AccessToken)
     public async register(@Args('input') input: UserCreateInput): Promise<AccessToken> {
          try {
               return this.authService.register(input);
          } catch (error) {
               throw new GraphQLError(error);
          }
     }
}