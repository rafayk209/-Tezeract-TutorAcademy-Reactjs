import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { TextField, Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { Avatar } from '@material-ui/core';
import { textAlign } from '@mui/system';

const avatarStyle = {
  backgroundColor: '#56c3ff',
  margin: 'auto',
  color: '#ffff',
};

const Posts = props => {
  const { emailp, id, coursep, descriptionp } = props;
  //console.log("id:", id);
  // const deleteData = async () => {
  //   await Axios.post("http://localhost:3002/register/deletepost", {
  //     id: id,
  //   }).then((response) => {
  //     console.log(response.data);
  //   });
  // };
  const deleteData = async () => {
    await Axios.post(
      'https://tezeract-tutoracademy-web.herokuapp.com/register/deleteposted',
      {
        id: id,
      },
    ).then(response => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <div>
        <br />
        <Card sx={{ maxWidth: 500, margin: 'auto' }}>
          <CardActionArea>
            <CardContent>
              <Typography
                className="textBorder"
                gutterBottom
                variant="h5"
                component="div"
              >
                <br />
                <Avatar style={avatarStyle}></Avatar>
                {emailp}
              </Typography>
              <Typography
                className="textBorder"
                gutterBottom
                variant="h5"
                component="div"
              >
                <span className="cardTitle">Course </span>
                {coursep}
              </Typography>
              <Typography
                className="textBorder"
                variant="body1"
                color="text.secondary"
              >
                <span className="cardTitle">Description </span>
                {descriptionp}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={deleteData} size="small" color="primary">
              Delete
            </Button>
          </CardActions>
        </Card>
        <br />
      </div>
    </div>
  );
};

export default Posts;
