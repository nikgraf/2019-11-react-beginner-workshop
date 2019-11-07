import React from "react";
import { useParams } from "react-router-dom";

export default function Topic(props) {
  console.log(props);
  const params = useParams();

  return <h2>ID: {params.id}</h2>;
}
