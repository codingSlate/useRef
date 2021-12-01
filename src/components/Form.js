import './Form.css';
import React from 'react';
import { useState } from 'react';

function Form() {
  const [inputName, setinputName] = useState('Enter Name');

  const submitHandler = (e) => {
    e.preventDefault();
    setinputName(''); // reset value
  };

  const nameHandler = (e) => {
    // console.log('input value', e.target.value);
    setinputName(e.target.value);
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={submitHandler}>
        <label className="input" htmlFor="name">
          Name
        </label>
        <input
          className="input"
          type="text"
          onChange={nameHandler}
          value={inputName}
        />
        <input className="input" type="submit" />
      </form>
    </div>
  );
}
export default Form;
