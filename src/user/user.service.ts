import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { FindUniqueUserOrThrowArgs } from '~/@generated/user/find-unique-user-or-throw.args';
import { LoginUserInput } from '~/@generated/user/login.user';
import { UserCreateInput } from '~/@generated/user/user-create.input';
import { UserUpdateInput } from '~/@generated/user/user-update.input';
import { DatabaseService } from '~/DataBase/database.service';

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
            else new Error("Movie Name already exists");
        } catch (error) {
            throw new Error(error?.message)
        }
    }

    public async login(user: LoginUserInput): Promise<string> {
        try {
            const isUserExist: User = await this.databaseService.user.findFirst({
                where: {
                    email: user.email,
                    password: user.password
                }
            });
            if (isUserExist) return "User Logged In";
            else new Error("User not found");
        } catch (error) {
            throw new Error(error?.message)
        }
    }

    public async updateUser(currentUser: FindUniqueUserOrThrowArgs, user: UserUpdateInput): Promise<User> {
        try {
            return this.databaseService.user.update({
                where: {
                    id: currentUser.where.id,
                    email: currentUser.where.email
                },
                data: user
            });
        } catch (error) {
            throw new Error(error?.message)
        }
    }

    
}
