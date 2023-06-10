import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Type } from 'class-transformer';
import { SessionUpdateWithoutUserInput } from './session-update-without-user.input';

@InputType()
export class SessionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: SessionWhereUniqueInput;

    @Field(() => SessionUpdateWithoutUserInput, {nullable:false})
    @Type(() => SessionUpdateWithoutUserInput)
    data!: SessionUpdateWithoutUserInput;
}
