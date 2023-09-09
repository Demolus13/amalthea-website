import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RobowarsRegistration from "./RegistrationPages/RobowarsReg";
import "../styles/Register.css";
import { auth } from "../utilities/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
} from "firebase/auth";

const Register = () => {
  const eventsComponents = {
    robowars: <RobowarsRegistration />,
  };
  const event = useParams().event.toLowerCase();

  const [email, setEmail] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isMailSent, setIsMailSent] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(error);
  console.log(user);

  useEffect(() => {
    if (!user) {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          // User opened the link on a different device
          email = window.prompt("Please provide your email for confirmation");
        }
        setLoginLoading(true);
        signInWithEmailLink(auth, email, window.location.href)
          .then(result => {
            // Clear email from storage.
            window.localStorage.removeItem("emailForSignIn");
            setLoginLoading(false);
            console.log(result);
            navigate(`/register/${event}`);
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
          })
          .catch(error => {
            setLoginError(error.message);
          });
      }
    }
  }, [user]);

  const handleLogin = event => {
    event.preventDefault();
    setLoginLoading(true);

    sendSignInLinkToEmail(auth, email, {
      //url to be redirected to after clicking link in email
      url: "http://localhost:3000/register/Robowars",
      handleCodeInApp: true,
    })
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        setLoginLoading(false);
        setIsMailSent(true);
        setLoginError("");
      })
      .catch(error => {
        setLoginLoading(false);
        setLoginError(error.message);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setEmail("");
        setIsMailSent(false);
        setLoginError("");
      })
      .catch(error => {
        // An error happened.
      });
  };

  return (
    <div id="register-container">
      <div id="register-card" className={user ? "active" : null}>
        {loading ? (
          <h2>Loading</h2>
        ) : (
          <>
            {user ? (
              <>
                <div>
                  <h4>Hello,</h4>
                  <h6>Logged in with {user.email}</h6>
                </div>
                {eventsComponents[event]}
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <div>
                  <h2>Login or Register</h2>
                  <h6>Only the Team Leader has to Login</h6>
                </div>
                <form onSubmit={handleLogin}>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    required
                    placeholder="Enter Email"
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button type="submit">
                    {loginLoading ? <>Logging In</> : <>Login</>}
                  </button>
                  {isMailSent ? (
                    <>
                      <span>Mail sent. Please Follow the link.</span>
                    </>
                  ) : null}
                  {loginError ? (
                    <>
                      <span>{loginError}</span>
                    </>
                  ) : null}
                </form>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
