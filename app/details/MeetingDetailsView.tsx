import React from "react";
import { Box, Typography } from "@mui/material";
const MeetingDetailView = ({ meeting, onClose }) => (
  <Box>
    <Typography variant="h5">{meeting.title}</Typography>
    <Typography variant="body1">{meeting.summary}</Typography>
    <button onClick={onClose}>Close</button>
  </Box>
);
export default MeetingDetailView;
