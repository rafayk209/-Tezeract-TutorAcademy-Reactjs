import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import UserCard from "./UserCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TextField, Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { Avatar } from "@material-ui/core";
import { textAlign } from "@mui/system";
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
export default function Admin() {
  const email = useSelector((state) => state.amount);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [posts, setPosts] = useState([]);
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    Axios.get("http://localhost:3002/register/allusers").then((response) => {
      setPosts(response.data);
    });
  }, [posts]);

  return (
    <div>
      <div></div>
      {posts.map((eachPost, index) => {
        if (eachPost.email !== email) {
          return (
            <UserCard
              key={index}
              emailp={eachPost.email}
              coursep={eachPost.name}
              descriptionp={eachPost.role}
            />
          );
        }
      })}
    </div>
  );
}
