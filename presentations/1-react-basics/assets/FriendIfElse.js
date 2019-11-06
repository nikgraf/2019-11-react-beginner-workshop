import React from 'react';

const Friend = (props) => {
  let status;
  if (props.lastActiveInSec < 60) {
    status = <span>Online</span>;
  } else {
    status = <span>Offline</span>;
  }

  return (
    <div>
      <div>{props.name}</div>
      {status}
    </div>
  );
};

export default Friend;
