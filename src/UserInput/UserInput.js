import React from 'react';

const userInput = (props) => {
  const inputStyle = {
    border: '1px solid red',
    cursor: 'pointer',
  };
  return <input style={inputStyle} type='text' onChange={props.changeName} />;
};

export default userInput;
