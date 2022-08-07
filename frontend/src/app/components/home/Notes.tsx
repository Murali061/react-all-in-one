import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/Notes/hooks'
import { deleteAyncNotes } from '../../redux/Notes/NotesSlice'
import { Notes } from '../models'

type Props = {
    note: Notes
}

const Note: React.FC<Props> = ({note}) => {


    const dispatch = useAppDispatch();
    const navigate  = useNavigate();

  const onDeleteHandler = () => {
    dispatch(deleteAyncNotes(note.id))
  }
  const goToNotes = () => {
   navigate(`/notes/${note.id}`)
  }
  return (
   <Card className='mt-3'>
    <Card.Body style={{backgroundColor: note.color}}>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle>{note.date}</Card.Subtitle>
        <Container>
        <Row>
          <Col>
          <Button variant='primary' className='mt-3 ' style={{marginRight: '12px'}} onClick={goToNotes} >View Details</Button>  
          <Button variant='danger' className='mt-3' onClick={onDeleteHandler}>Delete</Button>  
          </Col>
        </Row>

        </Container>
        
    </Card.Body>
   </Card>
  )
}

export default Note;