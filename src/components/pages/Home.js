import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { useEffect } from 'react';
import { io } from "socket.io-client";
import { uniqueNamesGenerator, colors, animals } from "unique-names-generator";

const socket = io("http://localhost:5000");

function Home() {
  const randomName = uniqueNamesGenerator({
    dictionaries: [colors, animals],
    style: "upperCase"
  });

  const handleNewUserMessage = (newMessage) => {
    // console.log(newMessage);
    socket.emit("send-message", `${randomName}` + " - " + `${newMessage}`);
  };

  useEffect(() => {
    addResponseMessage('Welcome To Clubconnect :)');
    socket.on('receive-message', (message) => {
      addResponseMessage(message);
    });
  }, []);

  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
      <Widget title="Welcome" subtitle={`Joined as ${randomName}`} handleNewUserMessage={handleNewUserMessage} />
    </>
  );
}

export default Home;