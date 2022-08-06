import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './app/pages/Home';
import Login from './app/pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Login />}></Route>
        <Route path='/home' element = {<Home />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
