import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TextField, Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { Avatar } from "@material-ui/core";
import { textAlign } from "@mui/system";

const avatarStyle = {
  backgroundColor: "#56c3ff",
  margin: "auto",
  color: "#ffff",
};

const center = {
  margin: "auto",
};
const Posts = (props) => {
  const { emails, course, emailp, coursep, descriptionp } = props;
  //const email = useSelector((state) => state.amount);

  const deleteData = async () => {
    await Axios.post("http://localhost:3002/register/delete", {
      email: emailp,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div>
        <br />
        <Card style={center} sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <br />
            <Avatar style={avatarStyle}></Avatar>
            <CardContent>
              <Typography
                className="textBorder"
                gutterBottom
                variant="h5"
                component="div"
              >
                <span className="cardTitle">Tutor </span>
                {emailp}
              </Typography>

              <Typography
                className="textBorder"
                gutterBottom
                variant="h5"
                component="div"
              >
                <span className="cardTitle">Student </span> {emails}
              </Typography>
              <Typography
                className="textBorder"
                gutterBottom
                variant="h5"
                component="div"
              >
                <span className="cardTitle">Subject </span> {course}
              </Typography>
              <Typography
                className="textBorder"
                gutterBottom
                variant="h5"
                component="div"
              >
                <span className="cardTitle">Detail </span> {coursep}
              </Typography>
              <Typography
                className="textBorder"
                variant="body1"
                color="text.secondary"
              >
                Amount {descriptionp}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <br />
      </div>
    </div>
  );
};

export default Posts;
