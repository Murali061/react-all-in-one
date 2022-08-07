import { useFormik } from 'formik';
import React, { useRef } from 'react'
import { Alert, Button, Form, FormGroup } from 'react-bootstrap'
import { string } from 'yup/lib/locale';
import { useAppDispatch } from '../../redux/Notes/hooks';
import { addAsyncNotes, addNotes } from '../../redux/Notes/NotesSlice';
import { Notes } from '../models';
import { NotesSchema } from './NotesSchema';

type Props = {}
interface CreateNoteValues  {
    title: string;
    text: string;
    color: string;
}

const CreateNotes: React.FC<Props> = () => {

    const dispatch = useAppDispatch();

    const initialValues: CreateNoteValues = {
        color: "#dfdfdf",
        text: "",
        title: ""
    }

    const {values, handleChange, isSubmitting, handleSubmit, errors, touched} = useFormik({
        initialValues: initialValues,
        onSubmit(values, formikHelpers) {
           
            const note: Notes = {
                id: (new Date).toString(),
                title: values.title as string,
                text: values.text as string,
                color: values.color as string,
                date: (new Date).toDateString()
               }

               formikHelpers.resetForm();
        
               dispatch(addAsyncNotes(note));
        
        },
        validationSchema: NotesSchema
    })

    // const titleRef  = useRef<HTMLInputElement | null>(null);
    // const textRef = useRef<HTMLTextAreaElement | null>(null);
    // const colorRef = useRef<HTMLInputElement | null>(null);

    // const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ): void => {
    //    e.preventDefault();
    //    const note: Notes = {
    //     id: (new Date).toString(),
    //     title: titleRef.current?.value as string,
    //     text: textRef.current?.value as string,
    //     color: colorRef.current?.value as string,
    //     date: (new Date).toDateString()
    //    }

    //    dispatch(addAsyncNotes(note));


    // }



  return (
    <div style={{textAlign: "left"}} className="mt-5">
    <h2>Create New Note</h2>
    <Form onSubmit={handleSubmit}>
        <FormGroup className='mt-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Enter the title' name='title' id='title' value={values.title} onChange={handleChange}></Form.Control>
            {errors.title && touched.title && <Alert variant='danger' className='mt-3'>{errors.title}</Alert>}
        </FormGroup>

        <FormGroup className='mt-3'>
            <Form.Label>Text</Form.Label>
            <Form.Control  placeholder='Enter the text'as="textarea" name='text' id='text' rows={3} value={values.text} onChange={handleChange}></Form.Control>
            {errors.text && touched.text && <Alert variant='danger' className='mt-3'>{errors.text}</Alert>}
        </FormGroup>
        <FormGroup className='mt-3'>
            <Form.Label>Color</Form.Label>
            <Form.Control  placeholder='Enter the text'type='color' name='color' id='color' value={values.color} onChange={handleChange}></Form.Control>
            {errors.color && touched.color && <Alert variant='danger' className='mt-3'>{errors.color}</Alert>}
        </FormGroup>
        <Button className='mt-5 mb-3' variant='primary' type='submit' >Submit</Button>
    </Form>
    </div>
  )
}

export default CreateNotes