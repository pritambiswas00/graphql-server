import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { SessionUpdateManyWithoutUserNestedInput } from '../session/session-update-many-without-user-nested.input';
import { MovieUpdateManyWithoutUserNestedInput } from '../movie/movie-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutReviewsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => SessionUpdateManyWithoutUserNestedInput, {nullable:true})
    session?: SessionUpdateManyWithoutUserNestedInput;

    @Field(() => MovieUpdateManyWithoutUserNestedInput, {nullable:true})
    movies?: MovieUpdateManyWithoutUserNestedInput;
}
