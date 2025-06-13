// src/Homepage.js
import { useState } from "react";
import { AppBar, Toolbar, Typography, Paper, Grid } from "@mui/material";
import MeetingDetails from "../details/MeetingDetails";
import SearchBar from "../search/SearchBar";
import Chat from "./Chat";
import { mockMeetingDetails } from "~/utils/api-mock";

const Homepage = () => {
  const meetingDetails = mockMeetingDetails;
  const [filteredMeetings, setFilteredMeetings] = useState(meetingDetails);

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
