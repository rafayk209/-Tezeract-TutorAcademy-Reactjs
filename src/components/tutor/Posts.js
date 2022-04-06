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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const email = useSelector((state) => state.amount);

  const { emailp, emails, course, coursep, descriptionp } = props;
  console.log(emailp, coursep, descriptionp);

  const [detail, setDetail] = useState("");
  const [offer, setOffer] = useState("");

  const proposals = {
    email: email,
    emails: emailp,
    course: coursep,
    detail: detail,
    offer: offer,
  };

  console.log("console proposal", proposals, emailp);
  const proposalsData = async () => {
    await Axios.post("http://localhost:3002/register/proposals", {
      email: emailp,
      proposals: proposals,
    }).then((response) => {
      console.log(response);
      console.log(response);
      console.log(response.data);
      console.log(response.data);
    });
  };

  //useEffect(() => {}, []);
  // const id = useSelector((state) => state.amountRole);
  // console.log("id:", id);
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
                <span className="cardTitle">Student </span> {emailp}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {course}
              </Typography>
              <Typography
                className="textBorder"
                gutterBottom
                variant="h5"
                component="div"
              >
                <span className="cardTitle">Subject </span> {coursep}
              </Typography>
              <Typography
                className="textBorder"
                variant="body2"
                color="text.secondary"
              >
                <span className="cardTitle">Description </span>
                {descriptionp}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div>
              <Button onClick={handleOpen}>Proposal</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <TextField
                    style={textField}
                    autoComplete="off"
                    fullWidth
                    label="detail"
                    placeholder="offer detail"
                    onChange={(e) => {
                      setDetail(e.target.value);
                    }}
                  />
                  <TextField
                    style={textField}
                    fullWidth
                    id="outlined-number"
                    label="offer in RS"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder="offer in RS"
                    onChange={(e) => {
                      setOffer(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  <Button
                    onClick={proposalsData}
                    style={avatarStyle}
                    size="small"
                    color="primary"
                  >
                    Post
                  </Button>
                </Box>
              </Modal>
            </div>
          </CardActions>
        </Card>
        <br />
      </div>
    </div>
  );
};

export default Posts;
