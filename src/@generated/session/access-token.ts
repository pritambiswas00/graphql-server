import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccessToken {

    @Field(() => String, {nullable:false})
    accessToken: String;
}