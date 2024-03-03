import './App.css';
import './normalize.css';

import { useState } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Chat from './components/Chat';
import Modal from './components/Modal';
import AuthForm from './components/AuthForm';


function App() {
  const [selectedAI, changeselectedAI] = useState<string>('GPT-4');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleModal = () => {
    setIsOpen(e => !e)
  }

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={handleModal}><AuthForm /></Modal>
      <Header setIsOpen={handleModal}/>
      <Nav selectedAI={selectedAI} 
           handleChange={(e: any) => { changeselectedAI(e) }}/>
      <Chat selectedAI={selectedAI}/>
    </>
  );
}

export default App;
