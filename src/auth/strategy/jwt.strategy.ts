import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { JwtPayload } from "../types";
import { ConfigService } from "@nestjs/config";
import { UserService } from "~/user/user.service";
import { GraphQLError } from "graphql";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService:ConfigService, private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET')
        })
    }

    async validate(payload: JwtPayload) {
         try{
             
            const isUserExist = await this.userService.findUserByEmailId(payload.email);
            if(!isUserExist) throw new GraphQLError("Un-Authorized"); 
            return isUserExist;
         }catch(error) {
              throw new GraphQLError(error);
         }
    }
}