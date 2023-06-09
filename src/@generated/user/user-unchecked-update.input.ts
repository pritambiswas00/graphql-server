import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ReviewUncheckedUpdateManyWithoutUserNestedInput } from '../review/review-unchecked-update-many-without-user-nested.input';
import { SessionUncheckedUpdateManyWithoutUserNestedInput } from '../session/session-unchecked-update-many-without-user-nested.input';
import { MovieUncheckedUpdateManyWithoutUserNestedInput } from '../movie/movie-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => MovieUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    movies?: MovieUncheckedUpdateManyWithoutUserNestedInput;
}
