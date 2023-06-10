import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutSessionInput } from '../user/user-create-nested-one-without-session.input';

@InputType()
export class SessionCreateInput {

    @Field(() => String, {nullable:false})
    sessionToken!: string;

    @Field(() => Date, {nullable:false})
    expires!: Date | string;

    @Field(() => UserCreateNestedOneWithoutSessionInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSessionInput;
}
