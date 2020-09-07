import React from 'react';

var validation = (props) => {
  let text = 'text too short';
  if (props.inputLength > 5) {
    text = 'text too long';
  }
  return <p>{text}</p>;
};
export default validation;
