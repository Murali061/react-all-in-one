import React from "react";
import { Notes } from "../models";
import Note from "./Notes";

type Props = {
  notes: Notes[];
};

const NotesList: React.FunctionComponent<Props> = ({ notes }) => {

    
  const renderNotesList = () => {
    return notes.length < 1 ? (
      <p>No Notes Found. Try adding them </p>
    ) : (
      notes.map((note) => {
        return <Note key={note.id} note={note} />;
      })
    );
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Notes</h2>
      {renderNotesList()}
    </div>
  );
};

export default NotesList;
