import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { FindUniqueUserOrThrowArgs } from '~/@generated/user/find-unique-user-or-throw.args';
import { LoginUserInput } from '~/@generated/user/login.user';
import { UserCreateInput } from '~/@generated/user/user-create.input';
import { UserUpdateInput } from '~/@generated/user/user-update.input';
import { DatabaseService } from '~/DataBase/database.service';
import * as bcrypt from 'bcrypt';
import { CurrentUser } from './user.decorator';
import { GraphQLError } from 'graphql';



@Injectable()
export class UserService {
    constructor(private readonly databaseService: DatabaseService) { }


    public async createUser(user: UserCreateInput): Promise<string> {
        try {
            const newUser = await this.databaseService.user.create({
                data: {
                    userName: user.userName,
                    reviews: user.reviews,
                    password: user.password,
                    email: user.email,
                }
            });
            if (newUser) return "new User Created";
            else new GraphQLError("User Name already exists");
        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }

    public async findUserByEmailId(emailId: string): Promise<User | null> {
        try {
            const user = await this.databaseService.user.findFirst({
                where: {
                    email: emailId
                }
            });
            if (user) return user;
            else return null;
        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }


    public async changePassword(@CurrentUser() currentUser: User, password: string): Promise<string> {
        try {
            const newHashedPassword = await bcrypt.hash(password, 10);
            await this.databaseService.user.update({
                where: {
                    email: currentUser.email
                },
                data: {
                    password: newHashedPassword
                }
            });
            return "Password Changed Successfully";
        } catch (error) {
            throw new GraphQLError(error)
        }
    }


}
