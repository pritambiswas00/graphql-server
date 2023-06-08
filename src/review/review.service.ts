import { Injectable } from "@nestjs/common";
import { Review } from "@prisma/client";
import { DeleteOneReviewArgs } from "~/@generated/review/delete-one-review.args";
import { FindManyReviewArgs } from "~/@generated/review/find-many-review.args";
import { FindUniqueReviewOrThrowArgs } from "~/@generated/review/find-unique-review-or-throw.args";
import { ReviewCreateInput } from "~/@generated/review/review-create.input";
import { ReviewUpdateInput } from "~/@generated/review/review-update.input";
import { ReviewWhereUniqueInput } from "~/@generated/review/review-where-unique.input";
import { DatabaseService } from "~/DataBase/database.service";


@Injectable()
export class ReviewService {
     constructor(private readonly databaseService: DatabaseService) { }

     //Find Reviews for a movie///
     public async findReviewsForMovie(review: FindManyReviewArgs): Promise<Review[]> {
          try {
               const { page, limit, orderBy, where } = review;
               const skip = (page - 1) * limit;
               return this.databaseService.review.findMany({
                    skip: skip,
                    take: limit,
                    orderBy: orderBy,
                    where: where
               })
          } catch (error) {
               throw new Error(error?.message)
          }
     }

     //Create Review
     public async createReview(review: ReviewCreateInput): Promise<Review> {
          try {
               return await this.databaseService.review.create({
                    data: review
               })
          } catch (error) {
               throw new Error(error?.message)
          }
     }

     //Edit Review
     public async updateReview(query: ReviewWhereUniqueInput, review: ReviewUpdateInput): Promise<Review> {
          try {
               return this.databaseService.review.update({
                    where: {
                         id: query.id
                    },
                    data: review
               })
          } catch (error) {
               throw new Error(error?.message)
          }
     }

     //Delete Review
     public async deleteReview(query: ReviewWhereUniqueInput): Promise<Review> {
          try {
               return this.databaseService.review.delete({
                    where: query
               })
          } catch (error) {
               throw new Error(error?.message)
          }
     }
}