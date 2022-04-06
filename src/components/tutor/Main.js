import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useEffect, useState } from "react";
import Tutor from "./Tutor";
import Accept from "./Accept";
import Proposal from "./Proposals";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TextField, Button, CardActionArea, CardActions } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { Avatar } from "@material-ui/core";
import { textAlign } from "@mui/system";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

export default function DisabledTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const email = useSelector((state) => state.amount);
  return (
    <div>
      <h1>Tutor {email}</h1>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Posts" value="1" />
              <Tab label="Accepted" value="2" />
              <Tab label="Proposal" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Tutor />
          </TabPanel>
          <TabPanel value="2">
            <Accept />
          </TabPanel>
          <TabPanel value="3">
            <Proposal />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
