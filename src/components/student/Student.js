import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Posts from "./Posts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TextField, Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { Avatar } from "@material-ui/core";
import { textAlign } from "@mui/system";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

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
const avatarStyle = {
  backgroundColor: "#56c3ff",
  margin: "auto",
  color: "#ffff",
};
const textField = {
  marginTop: 10,
};
export default function Student() {
  const email = useSelector((state) => state.amount);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [posts, setPosts] = useState([]);
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");

  const post = {
    course: course,
    description: description,
  };

  const postData = async () => {
    await Axios.post("http://localhost:3002/register/post", {
      email: email,
      posts: post,
    }).then((response) => {
      // console.log(post);
      // console.log(response);
      // console.log(response);
      // console.log(response.data.post);
      // console.log(response.data.post.posts);
      setPosts(response.data.post.posts);
    });
  };

  useEffect(() => {
    postData();
  }, []);

  const dispatch = useDispatch();
  const { getLoginRole, getLoginEmail, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <div>
        <Button onClick={handleOpen}>create post</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <Button
                sx={{ mx: 34, backgroundColor: "#fcfcfc", width: 5 }}
                onClick={handleClose}
              >
                X
              </Button>
              <CardContent>
                <Avatar style={avatarStyle}></Avatar>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                ></Typography>
                <TextField
                  style={textField}
                  autoComplete="off"
                  fullWidth
                  label="Course Title"
                  placeholder="Enter your course name"
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                />
                <TextField
                  style={{ width: "100%", marginTop: 20 }}
                  autoComplete="off"
                  id="outlined-textarea"
                  label="description"
                  placeholder="Placeholder"
                  multiline
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </CardContent>
              <CardActions>
                <Button
                  onClick={postData}
                  style={avatarStyle}
                  size="small"
                  color="primary"
                >
                  Post
                </Button>
              </CardActions>
            </div>
          </Box>
        </Modal>
      </div>
      <br />
      {posts.map((eachPost, index) => {
        if (eachPost.course) {
          return (
            <Posts
              key={index}
              id={eachPost._id}
              emailp={email}
              coursep={eachPost.course}
              descriptionp={eachPost.description}
            />
          );
        }
      })}
    </div>
  );
}
