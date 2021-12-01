import React from 'react';
import './style.css';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [inputName, setinputName] = useState('');

  const inputNameHandler = (data) => {
    console.log(data);
  };

  return (
    <>
      <Form getName={inputNameHandler} />
    </>
  );
}

export default App;
