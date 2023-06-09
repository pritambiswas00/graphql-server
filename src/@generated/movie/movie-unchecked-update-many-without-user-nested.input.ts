import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovieCreateWithoutUserInput } from './movie-create-without-user.input';
import { Type } from 'class-transformer';
import { MovieCreateOrConnectWithoutUserInput } from './movie-create-or-connect-without-user.input';
import { MovieUpsertWithWhereUniqueWithoutUserInput } from './movie-upsert-with-where-unique-without-user.input';
import { MovieCreateManyUserInputEnvelope } from './movie-create-many-user-input-envelope.input';
import { MovieWhereUniqueInput } from './movie-where-unique.input';
import { MovieUpdateWithWhereUniqueWithoutUserInput } from './movie-update-with-where-unique-without-user.input';
import { MovieUpdateManyWithWhereWithoutUserInput } from './movie-update-many-with-where-without-user.input';
import { MovieScalarWhereInput } from './movie-scalar-where.input';

@InputType()
export class MovieUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [MovieCreateWithoutUserInput], {nullable:true})
    @Type(() => MovieCreateWithoutUserInput)
    create?: Array<MovieCreateWithoutUserInput>;

    @Field(() => [MovieCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MovieCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MovieCreateOrConnectWithoutUserInput>;

    @Field(() => [MovieUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MovieUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<MovieUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => MovieCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MovieCreateManyUserInputEnvelope)
    createMany?: MovieCreateManyUserInputEnvelope;

    @Field(() => [MovieWhereUniqueInput], {nullable:true})
    @Type(() => MovieWhereUniqueInput)
    set?: Array<MovieWhereUniqueInput>;

    @Field(() => [MovieWhereUniqueInput], {nullable:true})
    @Type(() => MovieWhereUniqueInput)
    disconnect?: Array<MovieWhereUniqueInput>;

    @Field(() => [MovieWhereUniqueInput], {nullable:true})
    @Type(() => MovieWhereUniqueInput)
    delete?: Array<MovieWhereUniqueInput>;

    @Field(() => [MovieWhereUniqueInput], {nullable:true})
    @Type(() => MovieWhereUniqueInput)
    connect?: Array<MovieWhereUniqueInput>;

    @Field(() => [MovieUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MovieUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<MovieUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [MovieUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => MovieUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<MovieUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [MovieScalarWhereInput], {nullable:true})
    @Type(() => MovieScalarWhereInput)
    deleteMany?: Array<MovieScalarWhereInput>;
}
