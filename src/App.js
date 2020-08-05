import React, { useState, useEffect } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Footer from './comps/Footer';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./test/Home";
import Login from "./test/Login";
import SignUp from "./test/SignUp";
import { AuthProvider } from "./test/Auth";
import PrivateRoute from "./test/PrivateRoute";
import { app } from "./firebase/config";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user, setUser] = useState(false);


  useEffect(() => {
    let listener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(true)
        listener();
      } else {
        setUser(false)
        listener();
      }
    })
  })
  return (
    <div className="App">


      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </AuthProvider>
      <Title />
      {user ?
        <UploadForm /> :
        null
      }
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />

    </div>
  );
}

export default App;
