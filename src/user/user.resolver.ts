import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User as TUser } from '~/@generated/user/user.model';
import { UserService } from './user.service';
import { GraphQLError } from 'graphql';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from './user.decorator';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '~/auth/Guards/jwt.guard';

@Resolver(of => TUser)
export class UserResolver {
    constructor(private readonly userService: UserService) { };



    @Mutation(returns => String)
    @UseGuards(JwtAuthGuard)
    public async changePassword(@CurrentUser() currentUser:User, @Args("password") newPassword: string): Promise<string> {
        try {
            return this.userService.changePassword(currentUser, newPassword);
        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }
}
