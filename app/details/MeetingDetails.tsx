// src/MeetingDetails.js
import React, { useState } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
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
    <>
      <Grid size={4} spacing={2} container>
        {!meetings.length && <Skeleton height={100} />}
        {meetings.length &&
          meetings?.map((meeting, index) => (
            <Grid item key={index}>
              <Box display="flex" flexDirection="row" width="100%" key={index}>
                <div style={styles.summaryCard}>
                  <div style={styles.date}>
                    <div style={styles.month}>Jun</div>
                    <div style={styles.day}>5</div>
                  </div>
                  <div
                    style={styles.details}
                    onClick={() => handleSummaryClick(meeting)}
                  >
                    <div style={styles.name}>{meeting.title}</div>
                    <div style={styles.summary}>{meeting.summary}</div>
                  </div>
                  <div style={styles.tags}>
                    <div style={styles.tag}>{meeting.startTime}</div>
                    <div style={styles.tag}>{meeting.endTime}</div>
                  </div>
                </div>
              </Box>
            </Grid>
          ))}
      </Grid>
      <Grid size={8}>
        {!meetings.length && <Skeleton height={100} />}
        {meetings.length && selectedMeeting && (
          <Box style={styles.summaryCard}>
            <MeetingDetailView
              meeting={selectedMeeting}
              onClose={handleCloseDetailView}
            />
          </Box>
        )}
      </Grid>
    </>
  );
};
export default MeetingDetails;
