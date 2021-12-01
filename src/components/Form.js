import React from 'react';
import './Form.css';

function Form(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit clicked');
    props.
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={submitHandler}>
        <label className="input" htmlFor="name">
          Name
        </label>
        <input className="input" type="text" />
        <input className="input" type="submit" />
      </form>
    </div>
  );
}
export default Form;
