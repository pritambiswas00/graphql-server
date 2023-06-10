import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieUpdateManyMutationInput } from './movie-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MovieWhereInput } from './movie-where.input';

@ArgsType()
export class UpdateManyMovieArgs {

    @Field(() => MovieUpdateManyMutationInput, {nullable:false})
    @Type(() => MovieUpdateManyMutationInput)
    data!: MovieUpdateManyMutationInput;

    @Field(() => MovieWhereInput, {nullable:true})
    @Type(() => MovieWhereInput)
    where?: MovieWhereInput;
}
