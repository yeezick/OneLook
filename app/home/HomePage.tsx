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
import Chat from './Chat';
const Homepage = () => {
  const meetingDetails = [{
    "summary": "The product launch prep is on schedule across marketing, engineering, and customer support. Minor risk noted with the third-party payment API, with monitoring and contingencies in place. Final performance tests and support team trainings to complete this week. The go/no-go decision meeting is set for Monday.",
    "title": "Product Launch Sync – Status Update and Risk Review",
    "date": "June 12th 2025",
    "attendees": [
        "Sarah (Project Manager)",
        "David (Marketing Lead)",
        "Priya (Engineering Lead)",
        "Alex (Customer Success Manager)"
    ],
    "meetingNotes": [
        {
            "topic": "Marketing Update",
            "summary": "Marketing content and email campaigns are on track for launch; social calendar is finalized."
        },
        {
            "topic": "Engineering Update",
            "summary": "Engineering release candidate has passed QA; final performance testing underway with no expected blockers."
        },
        {
            "topic": "Customer Support Update",
            "summary": "Customer support FAQ and onboarding video completed; training sessions for support team scheduled for Friday."
        },
        {
            "topic": "Risks and Contingency",
            "summary": "Risk of third-party payment API downtime identified; monitoring in place and fallback ready."
        },
        {
            "topic": "Logistics",
            "summary": "Go/no-go meeting set for Monday at 10 a.m; agenda to be distributed by Sarah."
        }
    ],
    "actionItems": [
        {
            "title": "Prepare contingency user communication",
            "description": "Prepare a user communication template in case the payment API has downtime during launch.",
            "assignee": "David"
        },
        {
            "title": "Send go/no-go meeting agenda",
            "description": "Send agenda for the Monday go/no-go meeting to the team.",
            "assignee": "Sarah"
        }
    ],
    "jiras": [
        {
            "title": "Payment API Fallback System",
            "description": "Implement and monitor the fallback solution for payment API outages during launch.",
            "assignee": "Priya",
            "acceptanceCriteria": "1. Payment system automatically switches to fallback if main API is unavailable. 2. Team is alerted of API downtime. 3. Monitoring of the third-party API status is logged."
        }
    ]
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
      <Chat/>
    </div>
  );
};
export default Homepage;
