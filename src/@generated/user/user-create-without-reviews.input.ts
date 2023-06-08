import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateNestedManyWithoutUserInput } from '../session/session-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutReviewsInput {

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => SessionCreateNestedManyWithoutUserInput, {nullable:true})
    session?: SessionCreateNestedManyWithoutUserInput;
}
