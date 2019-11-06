import React from "react";

export default function Card(props) {
  // <Card tag="li">something</Card>
  // return React.createElement(props.tag ? props.tag : "div", {}, props.children);
  return <div className="card">{props.children}</div>;
}
