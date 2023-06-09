import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { GraphQLError } from "graphql";
import { Strategy } from "passport-local";
import { AuthService } from "~/auth/auth.service";



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
      constructor(private authService:AuthService){
          super({
            usernameField: 'email',
            passwordField: 'password',
          });
      }

      public async validate(email:string, password:string):Promise<any>{
        try {
            const userData = await this.authService.validateUser({ email, password });
            return userData;
          } catch (error) {
            throw new GraphQLError(error);
          }
      }
}