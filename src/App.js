import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './components/pages/Events';
import Chat from './components/pages/Chat';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/events' element={< Events />}></Route>
        <Route exact path='/chat' element={< Chat />}></Route>
          
          <Route path='/sign-up' element={<SignUp/>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;