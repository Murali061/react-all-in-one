import * as yup from 'yup';

export const NotesSchema = yup.object({
    title: yup.string().required("This is required"),
    text: yup.string().min(10, "Please enter min of 10 characters").required("This is required"),
    color: yup.string().required("This is required")
})