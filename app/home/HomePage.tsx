// src/Homepage.js
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Paper, Grid } from "@mui/material";
import MeetingDetails from "../details/MeetingDetails";
import SearchBar from "../search/SearchBar";
import Chat from "./Chat";

const Homepage = () => {
  const [meetingDetails, setMeetingDetails] = useState([]);
  const [filteredMeetings, setFilteredMeetings] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch(
      "http://hackathon.eba-xb6hdzdg.us-east-1.elasticbeanstalk.com/onelook/getMeetingDetails"
    )
      .then((res) => res.json())
      .then((data) => {
        setMeetingDetails(data);
        setFilteredMeetings(data);
      })
      .catch((err) => {
        // Handle error or set fallback data
        setMeetingDetails([]);
        setFilteredMeetings([]);
      });
  }, []);

  const handleFilter = (query) => {
    setFilteredMeetings(
      meetingDetails.filter((meeting) =>
        meeting.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar
          sx={{
            marginTop: 2,
          }}
        >
          <Typography variant="h6" component="div">
            OneLook
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper sx={{ p: 2, width: "100%" }}>
        <Grid container spacing={1}>
          <Grid size={12}>
            <SearchBar
              topActions={meetingDetails.map((meeting) => ({
                title: meeting.title,
              }))}
              onFilter={handleFilter}
            />
          </Grid>
          <MeetingDetails meetings={filteredMeetings} />
        </Grid>
      </Paper>
      <Chat />
    </div>
  );
};
export default Homepage;
