import { useField } from 'formik';
import React from 'react'
import { Alert, Form, FormGroup } from 'react-bootstrap';

type Props = {
    name: string;
    label: string;
    placeholder: string;
    
}

const CustomInput: React.FC<Props> = ({label, ...props}) => {

  const [field, meta , helpers] =  useField(props);


  return (
   <>
   <Form.Group className='mb-3' >
    <Form.Label htmlFor=''>{label}</Form.Label>
    <Form.Control className={meta.error && meta.touched?'error-input': ''} {...field} {...props}></Form.Control>
    {meta.error && meta.touched && <Alert variant='danger' className='mt-3'>{meta.error}</Alert>}
   </Form.Group>
   </>
  )
}

export default CustomInput