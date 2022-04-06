import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

import Axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
const Login = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "0 auto",
    marginTop: "30px",
  };
  const avatarStyle = { backgroundColor: "#56c3ff" };
  const linkStyle = { color: "#109eea" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#56c3ff" };
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const dispatch = useDispatch();
  const { getLoginEmail, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const login = async () => {
    await Axios.post("http://localhost:3002/register/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response) {
        console.log(response);
        console.log(response.data.userExist.role);

        console.log("done");
        setLoginStatus(response.data.message);
        dispatch(actionCreators.getLoginEmail(response.data.userExist.email));
        dispatch(actionCreators.getLoginRole(response.data.userExist.role));
        history.push(`/${response.data.userExist.role}`);
      } else {
        console.log("error");
      }
    });
  };
  console.log(loginStatus);

  // const balance = useSelector((state) => state.amount);

  return (
    <div>
      <div></div>
      {/* 
      <Button
        onClick={() => {
          dispatch(actionCreators.depositMoney(100));
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          dispatch(actionCreators.withdrawMoney(100));
        }}
      >
        -
      </Button>
      or
      <Button
        onClick={() => {
          dispatch(depositMoney(100));
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          dispatch(withdrawMoney(100));
        }}
      >
        -
      </Button>
      */}

      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Email"
            placeholder="Enter username"
            fullWidth
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={login}
          >
            Sign in
          </Button>
          <Link className="nav-link" style={linkStyle} to="/signup">
            Do you have account? SignUp
          </Link>
          <Typography>
            <Link style={linkStyle} href="#">
              Forgot password ?
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
