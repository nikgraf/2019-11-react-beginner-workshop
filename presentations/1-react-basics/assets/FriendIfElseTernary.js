import React from 'react';

const Friend = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <span>{props.lastActiveInSec < 60 ? 'Online' : 'Offline'}</span>
    </div>
  );
};

export default Friend;
