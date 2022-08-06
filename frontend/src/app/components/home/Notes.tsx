import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useAppDispatch } from '../../redux/hooks'
import { deleteNotes } from '../../redux/NotesSlice'
import { Notes } from '../models'

type Props = {
    note: Notes
}

const Note: React.FC<Props> = ({note}) => {


    const dispatch = useAppDispatch()

  const onDeleteHandler = () => {
    dispatch(deleteNotes({id: note.id}))
  }
  return (
   <Card>
    <Card.Body style={{backgroundColor: note.color}}>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle>{note.date}</Card.Subtitle>
        <Button variant='danger' className='mt-3' onClick={onDeleteHandler}>Delete</Button>
    </Card.Body>
   </Card>
  )
}

export default Note;