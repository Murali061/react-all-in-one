import React, { useRef } from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import { useAppDispatch } from '../../redux/Notes/hooks';
import { addNotes } from '../../redux/Notes/NotesSlice';
import { Notes } from '../models';

type Props = {}

const CreateNotes = (props: Props) => {

    const dispatch = useAppDispatch();

    const titleRef  = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ): void => {
       e.preventDefault();
       const note: Notes = {
        id: (new Date).toString(),
        title: titleRef.current?.value as string,
        text: textRef.current?.value as string,
        color: colorRef.current?.value as string,
        date: (new Date).toDateString()
       }

       dispatch(addNotes({note}));


    }



  return (
    <div style={{textAlign: "left"}} className="mt-5">
    <h2>Create New Note</h2>
    <Form>
        <FormGroup className='mt-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Enter the title' ref={titleRef}></Form.Control>
        </FormGroup>

        <FormGroup className='mt-3'>
            <Form.Label>Text</Form.Label>
            <Form.Control  placeholder='Enter the text'as="textarea" rows={3} ref={textRef}></Form.Control>
        </FormGroup>
        <FormGroup className='mt-3'>
            <Form.Label>Color</Form.Label>
            <Form.Control  placeholder='Enter the text'type='color' ref={colorRef}></Form.Control>
        </FormGroup>
        <Button className='mt-5 mb-3' variant='primary' onClick={onSubmitHandler} >Submit</Button>
    </Form>
    </div>
  )
}

export default CreateNotes