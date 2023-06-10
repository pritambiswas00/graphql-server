import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Review as TReview } from '~/@generated/review/review.model';
import { ReviewService } from './review.service';
import { Review, User } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { FindUniqueReviewOrThrowArgs } from '~/@generated/review/find-unique-review-or-throw.args';
import { ReviewCreateInput } from '~/@generated/review/review-create.input';
import { ReviewUpdateInput } from '~/@generated/review/review-update.input';
import { FindManyReviewArgs } from '~/@generated/review/find-many-review.args';
import { ReviewWhereUniqueInput } from '~/@generated/review/review-where-unique.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '~/auth/Guards/jwt.guard';
import { CurrentUser } from '~/user/user.decorator';
import { ReviewUpdateWithoutMovieInput } from '~/@generated/review/review-update-without-movie.input';
import { ReviewUpdateWithoutUserInput } from '~/@generated/review/review-update-without-user.input';

@Resolver(of => TReview)
export class ReviewResolver {
    constructor(private readonly reviewService: ReviewService) { }

    ///Find review for a movie//
    @Query(returns => [TReview])
    @UseGuards(JwtAuthGuard)
    public async findReviewsForMovie(@Args() movie: FindManyReviewArgs, @CurrentUser() currentUser:User): Promise<Review[]> {
        try {
            return this.reviewService.findReviewsForMovie(movie, currentUser);
        } catch (error) {
            throw new GraphQLError(error?.message);
        }
    }

    //Create a Review
    @Mutation(returns => TReview)
    @UseGuards(JwtAuthGuard)
    public async createReview(@Args('review') review: ReviewCreateInput, @CurrentUser() currentUser:User): Promise<Review> {
        try {
            return this.reviewService.createReview(review, currentUser)
        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }


    //Edit Review
    @Mutation(returns => TReview)
    @UseGuards(JwtAuthGuard)
    public async updateReview(
        @Args("seachInput") query: ReviewWhereUniqueInput, 
        @Args("review") review: ReviewUpdateWithoutUserInput,
        @CurrentUser() currentUser:User
        ): Promise<Review> {
        try {
            return this.reviewService.updateReview(currentUser,query, review);

        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }

    //Delete Review
    @Mutation(returns => TReview)
    @UseGuards(JwtAuthGuard)
    public async deleteReview(
        @Args("searchInput") query: ReviewWhereUniqueInput,
        @CurrentUser() currentUser:User
        ): Promise<Review> {
           try{
               return this.reviewService.deleteReview(currentUser,query);
           }catch(error){
               throw new GraphQLError(error?.message)
           }
    }

}
