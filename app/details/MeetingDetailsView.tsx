import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./styles";
const MeetingDetailView = ({ meeting, onClose }) => (
    <>
    <Box sx={(theme) => ({p: 2})}>
        <Typography variant="h4" style={styles.headers}>{meeting.title}</Typography>
        <Typography variant="body1">{meeting.date}</Typography>
        <Typography variant="body1">Attendees: {meeting.attendees.join(" ")}</Typography>
        <hr></hr>
        <Typography variant="h6" style={styles.headers}>Meeting Overview</Typography>
        <Typography variant="body1">{meeting.summary}</Typography>

        <Typography variant="h6" style={styles.headers}>Summaried Notes</Typography>
        {meeting.meetingNotes?.map((meetingNote) => {
        return (
            <>
            <Typography variant="h6" style={styles.meetingNotesTopic}>{meetingNote.topic}</Typography>
            <ListItem>{meetingNote.summary}</ListItem>
            </>
        )
        })}

        <Typography variant="h6" style={styles.headers}>Action Items</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Assignee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meeting.actionItems.map((actionItem) => (
            <TableRow
              key={actionItem.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {actionItem.title}
              </TableCell>
              <TableCell>{actionItem.description}</TableCell>
              <TableCell>{actionItem.assignee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>      
    </Box>
    </>
);
export default MeetingDetailView;
