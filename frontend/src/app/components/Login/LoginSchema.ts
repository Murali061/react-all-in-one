import * as yup from 'yup';


export const LoginSchema = yup.object({
    username: yup.string().required("This field is required").length(5, "Must be exactly 5 characters")
}) 