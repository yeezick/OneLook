import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import JiraStories from "~/jira/JiraSuggestions";
import styles from "~/utils/styles";
import { SectionTitle } from "~/utils/components";

const MeetingDetailView = ({ meeting, onClose }) => (
  <Box sx={(theme) => ({ p: 2 })}>
    <MeetingHeaders meeting={meeting} />
    <SummarizedNotes meeting={meeting} />
    <ActionItems meeting={meeting} />
    <JiraStories />
  </Box>
);
export default MeetingDetailView;

const MeetingHeaders = ({ meeting }) => {
  return (
    <Box>
      <Typography variant="h4" style={styles.headers}>
        {meeting.title}
      </Typography>
      <Typography variant="body1">{meeting.date}</Typography>
      <Typography variant="body1">
        Attendees: {meeting.attendees.join(" ")}
      </Typography>
      <hr></hr>
      <SectionTitle title="Meeting Overview" section="overview" />

      <Typography variant="body1">{meeting.summary}</Typography>
    </Box>
  );
};

const SummarizedNotes = ({ meeting }) => {
  return (
    <Box>
      <SectionTitle title="Summarized Notes" section="notes" />

      {meeting.meetingNotes?.map((meetingNote) => {
        return (
          <>
            <Typography variant="h6" style={styles.meetingNotesTopic}>
              {meetingNote.topic}
            </Typography>
            <ListItem>{meetingNote.summary}</ListItem>
          </>
        );
      })}
    </Box>
  );
};

const ActionItems = ({ meeting }) => {
  return (
    <Box>
      <SectionTitle title="Action Items" section="actions" />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Task</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Description</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Assignee</TableCell>
            </TableRow>
          </TableHead>
          <ActionItemRows meeting={meeting} />
        </Table>
      </TableContainer>
    </Box>
  );
};

const ActionItemRows = ({ meeting }) => (
  <TableBody>
    {meeting.actionItems.map((actionItem) => (
      <TableRow
        key={actionItem.title}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {actionItem.title}
        </TableCell>
        <TableCell>{actionItem.description}</TableCell>
        <TableCell>{actionItem.assignee}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);
