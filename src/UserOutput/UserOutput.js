import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>This is some random text</p>
      <p>This is changeable name: {props.userName}</p>
    </div>
  );
};

export default userOutput;
