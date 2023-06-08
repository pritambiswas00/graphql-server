import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ReviewUpdateManyWithoutUserNestedInput } from '../review/review-update-many-without-user-nested.input';
import { SessionUpdateManyWithoutUserNestedInput } from '../session/session-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutUserNestedInput;

    @Field(() => SessionUpdateManyWithoutUserNestedInput, {nullable:true})
    session?: SessionUpdateManyWithoutUserNestedInput;
}
