import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { app } from "../firebase/config";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
   
 {/* <div className="login-btn">
        <a href="#login-modal" className="button" data-toggle="modal" data-target="#login-modal">Login</a>
      </div> */}

      <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="loginmodal-container">
            <h1>Login if You are the owner</h1><br />
            <form onSubmit={handleLogin}>
              <input type="text" name="email" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
              <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
            </form>

           
          </div>
        </div>
      </div>

    </div>
  );
};

export default withRouter(Login);
