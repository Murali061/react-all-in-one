import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateNotes from "../components/home/CreateNotes";
import Header from "../components/home/Header";
import NotesList from "../components/home/NotesList";
import { Notes } from "../components/models";
import { useAppSelector } from "../redux/Notes/hooks";


type Props = {};

const Home: React.FC<Props> = (props) => {
  const notes: Notes[] = useAppSelector((state) => state.notes);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
