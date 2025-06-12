import React, { useState } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import MeetingDetailView from "./MeetingDetailsView";
import styles from "./styles";
const MeetingDetails = ({ meetings }) => {
  const meetingLists = meetings.map((meeting) => ({
    ...meeting,
    meetingSummary: meeting?.summary?.slice(0, 50) + "...",
  }));

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
          meetingLists?.map((meeting, index) => (
            <Grid item key={index}>
              <Box display="flex" flexDirection="row" width="100%" key={index}>
                <div
                  style={{
                    ...styles.summaryCard,
                    ...(meeting?.title?.toLowerCase() ===
                    selectedMeeting?.title?.toLowerCase()
                      ? { backgroundColor: "#f0f0f0" }
                      : {}),
                  }}
                >
                  <div style={styles.date}>
                    <div style={styles.month}>Jun</div>
                    <div style={styles.day}>5</div>
                  </div>
                  <div
                    style={styles.details}
                    onClick={() => handleSummaryClick(meeting)}
                  >
                    <div style={styles.name}>{meeting.title}</div>
                    <div style={styles.summary}>{meeting.meetingSummary}</div>
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
