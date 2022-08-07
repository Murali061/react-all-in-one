import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

type Props = {}

const NotesDetails = (props: Props) => {

    const {id} = useParams();
  return (
    <Container>
        <Row>
            <Col>
            <h4 className='mt-5'>Your coming from home page by clicking notes id {id}</h4>
            </Col>
        </Row>
    </Container>
   
  )
}

export default NotesDetails