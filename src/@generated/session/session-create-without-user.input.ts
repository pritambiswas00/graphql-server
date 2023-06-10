import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    sessionToken!: string;

    @Field(() => Date, {nullable:false})
    expires!: Date | string;
}
