import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieScalarWhereInput } from './movie-scalar-where.input';
import { Type } from 'class-transformer';
import { MovieUpdateManyMutationInput } from './movie-update-many-mutation.input';

@InputType()
export class MovieUpdateManyWithWhereWithoutUserInput {

    @Field(() => MovieScalarWhereInput, {nullable:false})
    @Type(() => MovieScalarWhereInput)
    where!: MovieScalarWhereInput;

    @Field(() => MovieUpdateManyMutationInput, {nullable:false})
    @Type(() => MovieUpdateManyMutationInput)
    data!: MovieUpdateManyMutationInput;
}
