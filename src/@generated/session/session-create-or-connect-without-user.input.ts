import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Type } from 'class-transformer';
import { SessionCreateWithoutUserInput } from './session-create-without-user.input';

@InputType()
export class SessionCreateOrConnectWithoutUserInput {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: SessionWhereUniqueInput;

    @Field(() => SessionCreateWithoutUserInput, {nullable:false})
    @Type(() => SessionCreateWithoutUserInput)
    create!: SessionCreateWithoutUserInput;
}
