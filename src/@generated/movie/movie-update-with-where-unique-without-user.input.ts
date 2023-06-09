import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieWhereUniqueInput } from './movie-where-unique.input';
import { Type } from 'class-transformer';
import { MovieUpdateWithoutUserInput } from './movie-update-without-user.input';

@InputType()
export class MovieUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => MovieWhereUniqueInput, {nullable:false})
    @Type(() => MovieWhereUniqueInput)
    where!: MovieWhereUniqueInput;

    @Field(() => MovieUpdateWithoutUserInput, {nullable:false})
    @Type(() => MovieUpdateWithoutUserInput)
    data!: MovieUpdateWithoutUserInput;
}
