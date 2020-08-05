import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {app} from "../firebase/config";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <div className="loginmodal-container">
            <h1>Sign Up</h1><br />
            <form onSubmit={handleSignUp}>
              <input type="email" name="email" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
              <input type="submit" name="Sign Up" className="login loginmodal-submit" value="Sign Up" />
            </form>

           
          </div>
    </div>
  );
};

export default withRouter(SignUp);
