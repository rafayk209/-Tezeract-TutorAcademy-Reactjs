import validator from 'validator';
import isEmail from 'validator/lib/isEmail';

import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../App.css';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Hidden,
} from '@material-ui/core';

const Signup = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: '0 auto',
    marginTop: '30px',
  };
  const btnstyle = { margin: '8px 0', backgroundColor: '#56c3ff' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#56c3ff' };
  const linkStyle = { color: '#109eea' };

  const history = useHistory();

  const [roleReg, setRoleReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [nameReg, setNameReg] = useState('');

  // Axios.defaults.withCredentials = true;
  const register = async () => {
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(emailReg)) {
      console.log(emailReg);

      await Axios.post(
        'https://tezeract-tutoracademy-web.herokuapp.com/register',
        {
          name: nameReg,
          role: roleReg,
          email: emailReg,
          password: passwordReg,
        },
      ).then(response => {
        console.log(response.data);
        console.log(response.data.id.error);
        console.log(response.data.id.email);
        if (response.data.id.error) {
          alert(response.data.id.error);
        }
        if (response.data.id.email) {
          history.push('/login');
        }
      });
    } else {
      alert('email format is not valid');
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    // console.log('refresh prevented');
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <br />
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={onSubmit}>
          <div
            onChange={e => {
              setRoleReg(e.target.value);
            }}
          >
            <input type="radio" value="student" name="role" /> Student{' '}
            <input type="radio" value="tutor" name="role" /> Tutor
          </div>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            onChange={e => {
              setNameReg(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            onChange={e => {
              setEmailReg(e.target.value);
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={e => {
              setPasswordReg(e.target.value);
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
            onClick={register}
          >
            Sign up
          </Button>
          <br />
          <Link style={linkStyle} className="nav-link" to="/login">
            already have an account? Login
          </Link>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
