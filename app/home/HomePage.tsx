// src/Homepage.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Paper,
  Grid,
  Skeleton,
} from "@mui/material";
import MeetingDetails from "../details/MeetingDetails";
import SearchBar from "../search/SearchBar";
const Homepage = () => {
  const meetingDetails = [
    {
      date: "April 5, 2025",
      title: "Kick Start Project X",
      summary: "this is meeting to discuss the initial steps of Project X",
      startTime: "6 pm ist",
      endTime: "6:30 pm ist",
      attendees: [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
      ],
      actionItems: [
        {
          task: "Define project scope",
          description:
            "Outline the main objectives and deliverables of Project X",
          assignee: "Alice",
        },
      ],
      jiraSuggestions: [
        {
          title: "Implement authentication",
          description: "Add user authentication to the applicatio",
          acceptanceCriteria: [
            {
              title: "User can log in",
              given: "User is on the login page",
              when: "User enters valid credentials",
              then: "User is redirected to the dashboard",
            },
          ],
        },
      ],
    },
    {
      date: "April 5, 2025",
      title: "Followup on Project Y",
      summary: "this is meeting to discuss the progress of Project Y",
      startTime: "6 pm ist",
      endTime: "6:30 pm ist",
      attendees: [{ name: "Charlie", email: "charlie@example.com" }],
      actionItems: [
        {
          task: "Review project timeline",
          description: "Check if we are on track with the project timeline",
          assignee: "Bob",
        },
      ],
      jiraSuggestions: [
        {
          title: "Update project documentation",
          description: "Ensure all project documentation is up to date",
          acceptanceCriteria: [
            {
              title: "Documentation is complete",
              given: "The project is at the final stage",
              when: "The team reviews the documentation",
              then: "All sections are filled out and accurate",
            },
          ],
        },
      ],
    },
  ];

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
            <SearchBar />
          </Grid>

          <MeetingDetails meetings={meetingDetails} />
          {/* Main content area */}
        </Grid>
      </Paper>
    </div>
  );
};
export default Homepage;
