import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SessionScalarWhereInput {

    @Field(() => [SessionScalarWhereInput], {nullable:true})
    AND?: Array<SessionScalarWhereInput>;

    @Field(() => [SessionScalarWhereInput], {nullable:true})
    OR?: Array<SessionScalarWhereInput>;

    @Field(() => [SessionScalarWhereInput], {nullable:true})
    NOT?: Array<SessionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    sessionToken?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expires?: DateTimeFilter;
}
