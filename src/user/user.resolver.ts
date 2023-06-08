import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User as TUser } from '~/@generated/user/user.model';
import { UserService } from './user.service';
import { GraphQLError } from 'graphql';
import { UserCreateInput } from '~/@generated/user/user-create.input';
import { LoginUserInput } from '~/@generated/user/login.user';
import { FindUniqueUserOrThrowArgs } from '~/@generated/user/find-unique-user-or-throw.args';
import { UserUpdateInput } from '~/@generated/user/user-update.input';

@Resolver(of => TUser)
export class UserResolver {
    constructor(private readonly userService: UserService) { }



    //Create user///
    @Mutation(returns => String)
    public async createUser(@Args("user") user: UserCreateInput): Promise<string> {
        try {
            return this.userService.createUser(user);
        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }

    @Mutation(returns => String)
    public async loginUser(@Args("user") user: LoginUserInput): Promise<string> {
        try {
            return this.userService.login(user);
        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }

    @Mutation(returns => TUser)
    public async updateUser(@Args() currentUser: FindUniqueUserOrThrowArgs, @Args("user") user: UserUpdateInput): Promise<TUser> {
        try {
            return this.userService.updateUser(currentUser, user);
        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }
}
