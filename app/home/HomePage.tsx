// src/Homepage.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import MeetingDetails from "../details/MeetingDetails";
import SearchBar from "../search/SearchBar";
import Chat from './Chat';
const Homepage = () => {
    const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
    const meetingDetails = [
        {
            meetingDate: "April 5, 2025",
            meetingHostName: "John Doe",
            meetingSummary: "this is meeting dvdsvvdvsdbsbf",
            meetingStartTime: "6 pm ist",
            meetingEndTime: "6:30 pm ist",
        },
        {
            meetingDate: "April 5, 2025",
            meetingHostName: "John Doe",
            meetingSummary: "this is meeting dvdsvvdvsdbsbf",
            meetingStartTime: "6 pm ist",
            meetingEndTime: "6:30 pm ist",
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
            <Box
                sx={{
                    // minHeight: '80vh',
                    minHeight: '50rem',
                    marginLeft: "2px",
                    border: "1px solid black",
                }}
            >
                <SearchBar />
                <MeetingDetails meetings={meetingDetails} />
                {/* Main content area */}
            </Box>
            <Chat/>
        </div>
    );
};
export default Homepage;









