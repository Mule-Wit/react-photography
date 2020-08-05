import React from "react";
import {app} from "../firebase/config";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button className=" signout-btn" onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
