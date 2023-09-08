import React, { useState } from "react";

const RobowarsRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div id="robowars-register">
      <h2>Register</h2>
      <form>
        <input
          id="email"
          type="email"
          value={email}
          required
          placeholder="Enter Email"
          onChange={e => setEmail(e.target.value)}
        />
      </form>
    </div>
  );
};

export default RobowarsRegistration;
