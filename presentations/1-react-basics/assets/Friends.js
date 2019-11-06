import React from 'react';

const Friends = (props) => {
  return (
    <ul>
      {props.friends.map((friend) => {
        return (
          <li>
            {friend.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Friends;
