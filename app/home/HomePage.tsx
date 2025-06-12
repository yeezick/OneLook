// src/Homepage.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import MeetingDetails from "../details/MeetingDetails";
import SearchBar from "../search/SearchBar";
const Homepage = () => {
    const meetingDetails = [
        {
            meetingDate: "April 5, 2025",
            meetingHostName: "John Doe",
            meetingSummary: "this is meeting dvdsvvdvsdbsbf",
            meetingStartTime: "6 pm ist",
            meetingEndTime: "6:30 pm ist",
            title: "Product Strategy Meeting",
            summary: "The Product Strategy Meeting is aimed at aligning our team on the key priorities for the upcoming quarter.",
            attendees: ["Julia", "Erick", "Stephen"],
            date: "March 18, 2025",
            meetingNotes: [{
                topic: "Q2 Feature Roadmap & Priorization",
                summary: ""
            },
            {
                topic: "Competitor benchmarking & differentiation",
                summary: ""
            }
        ],
            actionItems: [{
                task: "Onboarding Revamp: Improve the first-time user experience",
                description: "",
                assignee: ""
            }],
            jiraSuggestions: [{
                title: "Evaluate feasibility of Integrating LLM into UI",
                description: "",
                acceptanceCriteria: [{
                    title: "",
                    given: "",
                    when: "",
                    then: ""
                }]
            }],
        },
        {
            meetingDate: "April 5, 2025",
            meetingHostName: "John Doe",
            meetingSummary: "this is meeting dvdsvvdvsdbsbf",
            meetingStartTime: "6 pm ist",
            meetingEndTime: "6:30 pm ist",
            title: "Product Strategy Meeting",
            summary: "The Product Strategy Meeting is aimed at aligning our team on the key priorities for the upcoming quarter.",
            attendees: ["Julia", "Erick", "Stephen"],
            date: "March 18, 2025",
            meetingNotes: [{
                topic: "Q2 Feature Roadmap & Priorization",
                summary: ""
            }],
            actionItems: [{
                task: "Onboarding Revamp: Improve the first-time user experience",
                description: "",
                assignee: ""
            }],
            jiraSuggestions: [{
                title: "Evaluate feasibility of Integrating LLM into UI",
                description: "",
                acceptanceCriteria: [{
                    title: "",
                    given: "",
                    when: "",
                    then: ""
                }]
            }],
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
        </div>
    );
};
export default Homepage;









