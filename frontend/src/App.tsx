import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./app/components/home/Header";
import NotesList from "./app/components/home/NotesList";
import { Notes } from "./app/components/models";
import { UserContext } from "./app/context/UserContext";
import Home from "./app/pages/Home";
import Login from "./app/pages/Login";
import NotesDetails from "./app/pages/NotesDetails";
import { useAppSelector } from "./app/redux/Notes/hooks";
import ProctectRoute from "./app/Routes/ProctectRoute";

function App() {
  const [name, setName] = useState<string | null>(null);
  const setUsername = (username: string) => {
    setName(username);
  };
  const notes: Notes[] = useAppSelector((state) => state.notes);
  return (
    <div className="App">
      <UserContext.Provider value={name}>
      <Header />
        <Routes>
          <Route path="/" element={<Login setUsername={setUsername} />}></Route>
          <Route path="/home" element={<ProctectRoute />}>
            <Route path="" element={<Home />}>
            </Route>
          </Route>
          <Route path="notes" element = {<ProctectRoute />}>
             <Route path=":id" element={<NotesDetails />}></Route>
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
