import React from "react";
import { useParams } from "react-router-dom";

const Register = () => {
  const event = useParams().event;
  return <h1>hi {event}</h1>;
};

export default Register;
