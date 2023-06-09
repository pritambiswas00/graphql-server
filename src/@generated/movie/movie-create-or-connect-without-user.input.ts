import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieWhereUniqueInput } from './movie-where-unique.input';
import { Type } from 'class-transformer';
import { MovieCreateWithoutUserInput } from './movie-create-without-user.input';

@InputType()
export class MovieCreateOrConnectWithoutUserInput {

    @Field(() => MovieWhereUniqueInput, {nullable:false})
    @Type(() => MovieWhereUniqueInput)
    where!: MovieWhereUniqueInput;

    @Field(() => MovieCreateWithoutUserInput, {nullable:false})
    @Type(() => MovieCreateWithoutUserInput)
    create!: MovieCreateWithoutUserInput;
}
