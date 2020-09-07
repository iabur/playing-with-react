import React from 'react';

var char = (props) => {
  var charStyle = {
    display: 'inline-block',
    margin: '16px',
    border: '2px solid gray',
    padding: '16px',
    textAlign: 'center',
  };
  return (
    <div style={charStyle} onClick={props.deleteUser}>
      {props.inputChar}
    </div>
  );
};
export default char;
