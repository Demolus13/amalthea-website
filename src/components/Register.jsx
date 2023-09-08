import React from "react";
import { useParams } from "react-router-dom";
import RobowarsRegistration from "./RegistrationPages/RobowarsReg";
import "../styles/Register.css";

const Register = () => {
  const eventsComponents = {
    robowars: <RobowarsRegistration />,
  };
  const event = useParams().event.toLowerCase();
  return <div id="register-container">{eventsComponents[event]}</div>;
};

export default Register;
