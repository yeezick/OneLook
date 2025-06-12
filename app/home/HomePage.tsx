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
  const meetingDetails = [{
    "meetingTime": "2025-06-12T16:51:21.67249",
    "summary": "The meeting covered status updates for the upcoming product launch. All teams are on track: marketing content is ready, engineering has cleared QA with only performance testing remaining, and customer support materials are in place with training scheduled. The main risk identified is the potential downtime of a third-party payment API, for which monitoring and a fallback plan are active. Action items include preparing pre-written user communications and sending out the go/no-go meeting agenda. The team is aligned for a smooth launch.",
    "title": "Product Launch Sync – Status and Risk Review",
    "attendees": [
        "Sarah (Project Manager)",
        "David (Marketing Lead)",
        "Priya (Engineering Lead)",
        "Alex (Customer Success Manager)"
    ],
    "meetingNotes": [
        {
            "topic": "Status Updates",
            "summary": "All teams gave quick status updates. Marketing is ready with content and campaigns. Engineering has passed QA, only final performance test left. Customer success has documented materials and planned training."
        },
        {
            "topic": "Risk Management",
            "summary": "Potential risk if third-party payment API is down; fallback plan in place. Monitoring ongoing. Communication plan to be prepared for possible downtime."
        },
        {
            "topic": "Next Steps",
            "summary": "Go/No-Go meeting scheduled for Monday; agenda to be shared by Sarah."
        }
    ],
    "actionItems": [
        {
            "title": "Monitor Payment API and Prepare Fallback",
            "description": "Continue to monitor the payment API status and be ready to activate the fallback if required during launch.",
            "assignee": "Priya"
        },
        {
            "title": "Prepare Communication for Potential Payment API Downtime",
            "description": "Draft a pre-written communication for users in case the payment API experiences downtime at launch.",
            "assignee": "David"
        },
        {
            "title": "Send Go/No-Go Meeting Agenda",
            "description": "Send the agenda for Monday's go/no-go meeting to all attendees.",
            "assignee": "Sarah"
        }
    ],
    "jiras": [
        {
            "title": null,
            "description": "Implement, test and document the fallback mechanism for payment handling, and ensure monitoring is in place for the third-party payments API.",
            "assignee": "Priya",
            "acceptanceCriteria": "The payment fallback is ready and can be triggered if the third-party API is down during launch.",
            "url": "https://onelookmeeting.atlassian.net/rest/api/3/issue/10009"
        },
        {
            "title": null,
            "description": "Create a prepared communication (email/social/message) for users in the event of payment API downtime, enabling fast updates if necessary.",
            "assignee": "David",
            "acceptanceCriteria": "Communication template is ready, reviewed, and available before launch. Channels for quick dissemination are identified.",
            "url": "https://onelookmeeting.atlassian.net/rest/api/3/issue/10010"
        }
    ]
}];

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
