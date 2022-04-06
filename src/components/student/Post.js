import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
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

const textField = {
  marginTop: 10,
};
const avatarStyle = {
  backgroundColor: "#56c3ff",
  margin: "auto",
  color: "#ffff",
};
const center = {
  margin: "auto",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Posts = (props) => {
  const email = useSelector((state) => state.amount);
  const [acceptEmail, setAcceptEmail] = useState("");
  const [acceptDetail, setAcceptDetail] = useState("");
  const [acceptOffer, setAcceptOffer] = useState("");
  const [acceptProposals, setAcceptProposals] = useState([]);

  const { id, emails, course, emailp, coursep, descriptionp } = props;
  console.log(id, emailp, coursep, descriptionp);
  // const id = useSelector((state) => state.amountRole);
  // console.log("id:", id);

  const accepts = {
    email: emailp,
    emails: emails,
    course: course,
    detail: coursep,
    offer: descriptionp,
  };

  const deleteData = async () => {
    await Axios.post("http://localhost:3002/register/deletepost", {
      id: id,
    }).then((response) => {
      console.log(response.data);
    });
  };

  const acceptData = async () => {
    await Axios.post("http://localhost:3002/register/accepts", {
      email: email,
      accepts: accepts,
    }).then((response) => {
      console.log(response);

      setAcceptProposals(response.data);
    });

    await Axios.post("http://localhost:3002/register/deletepost", {
      id: id,
    }).then((response) => {
      console.log(response.data);
    });
  };

  

  return (
    <div>
      <div>
        <br />
        <Card style={center} sx={{ maxWidth: 345 }}>
          <CardActionArea>
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
                <span className="cardTitle">Course </span>:{course}
              </Typography>
              <Typography
                className="textBorder"
                gutterBottom
                variant="h5"
                component="div"
              >
                <span className="cardTitle">Detail </span>
                {coursep}
              </Typography>
              <Typography
                className="textBorder"
                variant="body1"
                color="text.secondary"
              >
                Fees:{descriptionp}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={deleteData}>reject</Button>
            <Button onClick={acceptData}>Accept</Button>
          </CardActions>
        </Card>
        <br />
      </div>
    </div>
  );
};

export default Posts;
