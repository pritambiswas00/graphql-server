import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutSessionNestedInput } from '../user/user-update-one-required-without-session-nested.input';

@InputType()
export class SessionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sessionToken?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expires?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutSessionNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutSessionNestedInput;
}
