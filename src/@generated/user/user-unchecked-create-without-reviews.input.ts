import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SessionUncheckedCreateNestedManyWithoutUserInput } from '../session/session-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutReviewsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    session?: SessionUncheckedCreateNestedManyWithoutUserInput;
}
