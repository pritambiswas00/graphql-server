import {  Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '~/user/user.service';
import { JwtPayload } from './types';
import { User } from '@prisma/client';
import { LoginUserInput } from '~/@generated/user/login.user';
import { AccessToken } from '~/@generated/session/access-token';
import { GraphQLError } from 'graphql';
import { ConfigService } from '@nestjs/config';
import * as bycrpt from "bcrypt";
import { UserCreateInput } from '~/@generated/user/user-create.input';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService, private readonly configService: ConfigService) { }

    public async validateUser(input: { email: string, password: string }): Promise<Partial<User> | null> {
        try {
            const user = await this.userService.findUserByEmailId(input.email);
            if (!user) {
                throw new GraphQLError("User not found.");
            }
            const IsValidPassword = await bycrpt.compare(
                input.password,
                user.password,
            );
            if (!IsValidPassword) {
                throw new GraphQLError("Password is not valid.");
            }
            delete user.password;
            return user;
        } catch (error) {
            throw new GraphQLError(error?.message);
        }
    }

    public async login(user: LoginUserInput): Promise<AccessToken> {
        const userFound = await this.userService.findUserByEmailId(user.email);
        if (!userFound) throw new GraphQLError("User not found with Email " + user.email);
        const payload: JwtPayload = {
            email: user.email,
            iat: Number(new Date().getTime()),
        }
        const accessToken = await this.jwtService.signAsync(payload, { secret: this.configService.get("JWT_SECRET"), expiresIn: this.configService.get("JWT_EXPIRES_IN") });
        return { accessToken };
    }

    public async register(user: UserCreateInput): Promise<AccessToken> {
        const userFound = await this.userService.findUserByEmailId(user.email);
        if (userFound) throw new GraphQLError("User already exists with Email " + user.email);
        const hashedPassword = await bycrpt.hash(user.password, 10);
        user.password = hashedPassword;
        await this.userService.createUser(user);
        const payload: JwtPayload = {
            email: user.email,
            iat: Number(new Date().getTime()),
        }
        const accessToken = await this.jwtService.signAsync(payload, { secret: this.configService.get("JWT_SECRET"), expiresIn: this.configService.get("JWT_EXPIRES_IN") });
        return { accessToken };
    }
}
