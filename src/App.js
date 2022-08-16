import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/events' element={< Events />}></Route>
          <Route path='/sign-up' element={<SignUp/>} ></Route>
          <Route path='/chat' element={<About/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;