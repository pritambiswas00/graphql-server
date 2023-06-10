import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieWhereInput } from './movie-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMovieArgs {

    @Field(() => MovieWhereInput, {nullable:true})
    @Type(() => MovieWhereInput)
    where?: MovieWhereInput;
}
