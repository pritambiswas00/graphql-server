import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';

@InputType()
export class MovieWhereInput {

    @Field(() => [MovieWhereInput], {nullable:true})
    AND?: Array<MovieWhereInput>;

    @Field(() => [MovieWhereInput], {nullable:true})
    OR?: Array<MovieWhereInput>;

    @Field(() => [MovieWhereInput], {nullable:true})
    NOT?: Array<MovieWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    movieName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    director?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    releaseDate?: DateTimeFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;
}
