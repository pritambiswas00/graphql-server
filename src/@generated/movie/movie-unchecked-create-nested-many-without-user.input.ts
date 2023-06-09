import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieCreateWithoutUserInput } from './movie-create-without-user.input';
import { Type } from 'class-transformer';
import { MovieCreateOrConnectWithoutUserInput } from './movie-create-or-connect-without-user.input';
import { MovieCreateManyUserInputEnvelope } from './movie-create-many-user-input-envelope.input';
import { MovieWhereUniqueInput } from './movie-where-unique.input';

@InputType()
export class MovieUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [MovieCreateWithoutUserInput], {nullable:true})
    @Type(() => MovieCreateWithoutUserInput)
    create?: Array<MovieCreateWithoutUserInput>;

    @Field(() => [MovieCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MovieCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MovieCreateOrConnectWithoutUserInput>;

    @Field(() => MovieCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MovieCreateManyUserInputEnvelope)
    createMany?: MovieCreateManyUserInputEnvelope;

    @Field(() => [MovieWhereUniqueInput], {nullable:true})
    @Type(() => MovieWhereUniqueInput)
    connect?: Array<MovieWhereUniqueInput>;
}
