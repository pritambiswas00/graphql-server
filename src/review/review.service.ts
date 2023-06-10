import { Injectable } from "@nestjs/common";
import { Review, User } from "@prisma/client";
import { MovieOrderByWithRelationInput } from "~/@generated/movie/movie-order-by-with-relation.input";
import { DeleteOneReviewArgs } from "~/@generated/review/delete-one-review.args";
import { FindManyReviewArgs } from "~/@generated/review/find-many-review.args";
import { FindUniqueReviewOrThrowArgs } from "~/@generated/review/find-unique-review-or-throw.args";
import { ReviewCreateInput } from "~/@generated/review/review-create.input";
import { ReviewUpdateWithoutMovieInput } from "~/@generated/review/review-update-without-movie.input";
import { ReviewUpdateWithoutUserInput } from "~/@generated/review/review-update-without-user.input";
import { ReviewUpdateInput } from "~/@generated/review/review-update.input";
import { ReviewWhereUniqueInput } from "~/@generated/review/review-where-unique.input";
import { DatabaseService } from "~/DataBase/database.service";


@Injectable()
export class ReviewService {
     constructor(private readonly databaseService: DatabaseService) { }

     //Find Reviews for a movie///
     public async findReviewsForMovie(review: FindManyReviewArgs, user:User): Promise<Review[]> {
          try {
               const { page, limit, orderBy, where } = review;
               const skip = (page - 1) * limit;
               const reviews = await this.databaseService.review.findMany({
                    skip: skip,
                    take: limit,
                    orderBy: orderBy,
                    where: where,
                    include:{
                          movie: true,
                          user: true
                    }
               });
               return reviews.sort((a,b)=> a.userId===user.id?-1:1);
          } catch (error) {
               throw new Error(error?.message)
          }
     }

     //Create Review
     public async createReview(review: ReviewCreateInput,user:User): Promise<Review> {
          try {
               return await this.databaseService.review.create({
                     data: {
                         comment: review.comment,
                         rating: review.rating,
                         movie: review.movie,
                         user: {
                              connect: {
                                   id: user.id
                              }
                         }
                     },
                     include: {
                         movie: true,
                         user: true
                     }
               })
          } catch (error) {
               throw new Error(error?.message)
          }
     }

     //Edit Review
     public async updateReview(user:User,query: ReviewWhereUniqueInput, review: ReviewUpdateWithoutUserInput): Promise<Review> {
          try {
               const isReviewAllowed = await this.databaseService.review.findUnique({
                        where : {
                          id : query.id,
                        }
               });
               if(isReviewAllowed.userId !== user.id) throw new Error("Not Authorized to edit this review.");
               return this.databaseService.review.update({
                    where: query,
                    data: review,
                    include:{
                         movie: true,
                         user: true
                    }
               })
          } catch (error) {
               throw new Error(error?.message)
          }
     }

     //Delete Review
     public async deleteReview(user:User,query: ReviewWhereUniqueInput): Promise<Review> {
          try {

               const review = await this.databaseService.review.findUnique({
                    where: query
               });
               if(!review) throw new Error("Review not found.");
               if(review.userId !== user.id) throw new Error("Not Authorized to delete this review.");
               return this.databaseService.review.delete({
                    where: query
               })
          } catch (error) {
               throw new Error(error);
          }
     }
}