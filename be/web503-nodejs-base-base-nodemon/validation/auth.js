import Joi from "joi";

export const validateAuth = Joi.object({
    
    name: Joi.string().required().messages({
        "any:required": "name khong duoc bo trong",
        
       
    }),
    email: Joi.string().email().required().messages({
        "any:required": "email khong duoc bo trong",
        "string:email" : "email sai"
       
    }),
    password: Joi.string().required().min(4).messages({
        "any:required": "password khong duoc bo trong",
        "string: min"  : "password phai du 4 ky tu"
       
    }),
    role: Joi.string().valid('user', 'admin').optional()
})