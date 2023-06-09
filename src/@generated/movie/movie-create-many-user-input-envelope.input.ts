import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieCreateManyUserInput } from './movie-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class MovieCreateManyUserInputEnvelope {

    @Field(() => [MovieCreateManyUserInput], {nullable:false})
    @Type(() => MovieCreateManyUserInput)
    data!: Array<MovieCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
