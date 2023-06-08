import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Review as TReview } from '~/@generated/review/review.model';
import { ReviewService } from './review.service';
import { Review } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { FindUniqueReviewOrThrowArgs } from '~/@generated/review/find-unique-review-or-throw.args';
import { ReviewCreateInput } from '~/@generated/review/review-create.input';
import { ReviewUpdateInput } from '~/@generated/review/review-update.input';
import { FindManyReviewArgs } from '~/@generated/review/find-many-review.args';

@Resolver(of => TReview)
export class ReviewResolver {
    constructor(private readonly reviewService: ReviewService) { }

    ///Find review for a movie//
    @Query(returns => [TReview])
    public async findReviewsForMovie(@Args() movie: FindManyReviewArgs): Promise<Review[]> {
        try {
            return this.reviewService.findReviewsForMovie(movie);
        } catch (error) {
            throw new GraphQLError(error?.message);
        }
    }

    //Create a Review
    @Mutation(returns => TReview)
    public async createReview(@Args('review') review: ReviewCreateInput): Promise<Review> {
        try {
            return this.reviewService.createReview(review)
        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }


    //Edit Review
    @Mutation(returns => TReview)
    public async updateReview(@Args() query: FindUniqueReviewOrThrowArgs, @Args("review") review: ReviewUpdateInput): Promise<Review> {
        try {
            return this.reviewService.updateReview(query, review);

        } catch (error) {
            throw new GraphQLError(error?.message)
        }
    }

    //Delete Review
    @Mutation(returns => TReview)
    public async deleteReview(@Args() query: FindUniqueReviewOrThrowArgs): Promise<Review> {
           try{
               return this.reviewService.deleteReview(query);
           }catch(error){
               throw new GraphQLError(error?.message)
           }
    }

}
