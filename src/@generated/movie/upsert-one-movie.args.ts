import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieWhereUniqueInput } from './movie-where-unique.input';
import { Type } from 'class-transformer';
import { MovieCreateInput } from './movie-create.input';
import { MovieUpdateInput } from './movie-update.input';

@ArgsType()
export class UpsertOneMovieArgs {

    @Field(() => MovieWhereUniqueInput, {nullable:false})
    @Type(() => MovieWhereUniqueInput)
    where!: MovieWhereUniqueInput;

    @Field(() => MovieCreateInput, {nullable:false})
    @Type(() => MovieCreateInput)
    create!: MovieCreateInput;

    @Field(() => MovieUpdateInput, {nullable:false})
    @Type(() => MovieUpdateInput)
    update!: MovieUpdateInput;
}
