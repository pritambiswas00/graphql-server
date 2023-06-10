import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';
import { SessionUncheckedCreateNestedManyWithoutUserInput } from '../session/session-unchecked-create-nested-many-without-user.input';
import { MovieUncheckedCreateNestedManyWithoutUserInput } from '../movie/movie-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    session?: SessionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MovieUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    movies?: MovieUncheckedCreateNestedManyWithoutUserInput;
}
