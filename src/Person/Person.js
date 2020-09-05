import React from 'react';
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        Hi, I am {props.name} and I am {props.age} yeras old
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;
