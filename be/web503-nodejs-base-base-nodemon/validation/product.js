import Joi from "joi";

export const validate = Joi.object({
    name: Joi.string().required().min(3).message({
        "string.empty": "Pass không đc để trống!!!",
        "any: required":"Tên không được bỏ trống",
        "string:min": "Tên phải có ít nhất 3 ký tự"
    }),
    price: Joi.number().required().min(100).message({
        "string.empty": "Pass không đc để trống!!!",
        "any: required":"Tên không được bỏ trống",
        "number:min": "Giá phải ít nhất 1000"
    }),
    img: Joi.string().required().min(3).message({
        "string.empty": "Pass không đc để trống!!!",
        "any: required":"Ảnh không được bỏ trống",
        "string:min": "ảnh phải có ít nhất 3 ký tự"
    }),
    category: Joi.string().required().min(3).message({
        "string.empty": "Pass không đc để trống!!!",
        "any: required":"Ảnh không được bỏ trống",
        "string:min": "ảnh phải có ít nhất 3 ký tự"
    }),
    description: Joi.string().required().min(3).message({
        "string.empty": "Pass không đc để trống!!!",
        "any: required":"Ảnh không được bỏ trống",
        "string:min": "ảnh phải có ít nhất 3 ký tự"
    })
})