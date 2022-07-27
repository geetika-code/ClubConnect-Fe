import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import {Widget,addResponseMessage} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import {useEffect} from'react';

function Home() {
  const handleNewUserMessage =(newMessage)=>{
    console.log('New');
    addResponseMessage('Response...');
  }
  useEffect(()=>{
addResponseMessage('Welcome To Clubconnect :)');
  },[])
  return (
    <>
   <HeroSection />
      <Cards />
      <Footer />
      <Widget handleNewUserMessage={handleNewUserMessage}/>
    </>
  );
}

export default Home;