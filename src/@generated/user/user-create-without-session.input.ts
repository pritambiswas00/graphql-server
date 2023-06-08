import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutSessionInput {

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutUserInput;
}
