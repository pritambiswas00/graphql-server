import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Type } from 'class-transformer';
import { SessionUpdateWithoutUserInput } from './session-update-without-user.input';
import { SessionCreateWithoutUserInput } from './session-create-without-user.input';

@InputType()
export class SessionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: SessionWhereUniqueInput;

    @Field(() => SessionUpdateWithoutUserInput, {nullable:false})
    @Type(() => SessionUpdateWithoutUserInput)
    update!: SessionUpdateWithoutUserInput;

    @Field(() => SessionCreateWithoutUserInput, {nullable:false})
    @Type(() => SessionCreateWithoutUserInput)
    create!: SessionCreateWithoutUserInput;
}
