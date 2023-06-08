import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovieCreateManyInput } from './movie-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMovieArgs {

    @Field(() => [MovieCreateManyInput], {nullable:false})
    @Type(() => MovieCreateManyInput)
    data!: Array<MovieCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
