import Img1 from "./assets/img1.png";
import React from "react";
import Admin from "./components/admin/Main";
import Student from "./components/student/Main";
import Tutor from "./components/tutor/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home
              name="Welcome to"
              image={Img1}
              button="Register now"
              visit="/signup"
            />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>

          <Route exact path="/admin">
            <Admin />
          </Route>

          <Route exact path="/Student">
            <Student />
          </Route>
          <Route exact path="/Tutor">
            <Tutor />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
