import React from "react";
import ReactDOM from "react-dom";

// class Hello extends React.Component {
//   render() {
//     return <div>Hello World {this.props.name}</div>;
//   }
// }

// const Hello = props => {
//   console.log(props.something);
//   return (
//     <div>
//       <h2>Hello {props.name}!</h2>
//     </div>
//   );
// };

const Friends = props => {
  return (
    <ul>
      {props.friends.map(friend => {
        return <li key={friend.id}>{friend.name}</li>;
      })}
    </ul>
  );
};

ReactDOM.render(
  <Friends
    friends={[{ name: "Max", id: "abc" }, { name: "Sebastian", id: "cdf" }]}
  />,
  document.getElementById("root")
);
