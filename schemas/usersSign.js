import joi from "joi"

export const userCreateSignUp = joi.object({
    email: joi.string().email().message('email no valido')
    .required(),
    password: joi.string()
    .min(5)
    .required(),
})

export const userCreateSignIn = joi.object({
    email: joi.string().email()
    .required(),
    password: joi.string()
    .min(5)
    .required(),
})