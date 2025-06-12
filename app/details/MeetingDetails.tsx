// src/MeetingDetails.js
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import MeetingDetailView from "./MeetingDetailsView";
import styles from "./styles";
const MeetingDetails = ({ meetings }) => {
    const [selectedMeeting, setSelectedMeeting] = useState(null);
    const handleSummaryClick = (meeting) => {
        setSelectedMeeting(meeting);
    };
    const handleCloseDetailView = () => {
        setSelectedMeeting(null);
    };
    return (
        <Box display="flex" flexDirection="row" width="100%">
            <Grid
                container
                spacing={2}
                style={styles.meetingSummaryCardContainer}
            >
            {meetings?.map((meeting, index) => (
                    <Grid item xs={12} key={index}>
                        <div style={styles.meetingSummaryCard}>
                            <div style={styles.date}>
                                <div style={styles.month}>Jun</div>
                                <div style={styles.day}>5</div>
                            </div>
                            <div
                                style={styles.details}
                                onClick={() => handleSummaryClick(meeting)}
                            >
                                <div style={styles.name}>{meeting.meetingHostName}</div>
                                <div style={styles.summary}>Meeting Summary with .....</div>
                            </div>
                            <div style={styles.tags}>
                                <div style={styles.tag}>{meeting.meetingStartTime}</div>
                                <div style={styles.tag}>{meeting.meetingEndTime}</div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
            {selectedMeeting && (
                <Box style={styles.meetingSummaryCard}>
                    <MeetingDetailView
                        meeting={selectedMeeting}
                        onClose={handleCloseDetailView}
                    />
                </Box>
            )}
        </Box>
    );
};
export default MeetingDetails;












