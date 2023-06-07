import * as Joi from "joi";

export const configValidator = Joi.object({
     PORT: Joi.number().required(),
     DATABASE_URL: Joi.string(),
})