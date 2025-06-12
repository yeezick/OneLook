import React from 'react';
import { Box, Drawer, List, ListItem, Typography } from '@mui/material';
const MeetingDetailView = ({ meeting, onClose }) => (
    <>
    {console.log('meeting: ', meeting)}
    <Drawer open={true} onClose={onClose} 
    anchor={'right'}
    PaperProps={{
            sx: { width: "50%" },
          }}>
        <Typography variant="h4" fontWeight={'bold'}>{meeting.title}</Typography>
        <Typography variant="body1">{meeting.date}</Typography>
        <Typography variant="body2">Attendees: {meeting.attendees.join(" ")}</Typography>
        <hr></hr>
        <Typography variant="h6" fontWeight={'bold'}>Meeting Overview</Typography>
        <Typography variant="body2">{meeting.summary}</Typography>

        <Typography variant="h6" fontWeight={'bold'}>Summaried Notes</Typography>
        <Typography variant="h6" fontWeight={'bold'}>Key Topics Discussed</Typography>
    
        {/* <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
                abc
            </ListItem>
        </List> */}
        {meeting.meetingNotes?.map((note) => {
        {console.log('note: ', note)}
        {console.log('note.topic: ', note.topic)}
        // <ul>
        //     <li>{note.topic}</li>
        // </ul>
        // return (
        //     <List sx = {{listStyleType: 'disc', pl: 2,'& .MuiListItem-root': { display: 'list-item', },}}>
        //     <ListItem>{note.topic}</ListItem>
        // </List>
        // )
        })}

        {meeting.meetingNotes.map((note) => {
            // <li key={index}>{note.topic}</li>
            // <>
            // <List sx = {{listStyleType: 'disc', pl: 2,'& .MuiListItem-root': { display: 'list-item', },}}></List>
            // <ListItem>{note.topic}</ListItem>
            // </>
            <List sx = {{listStyleType: 'disc', pl: 2,'& .MuiListItem-root': { display: 'list-item', },}}>
                <ListItem sx = {{display: 'list-item',}}>
                    {note.topic}
                </ListItem>
            </List>
        })}

        
        <Typography variant="h6" fontWeight={'bold'}>Decisions Made</Typography>
        <Typography variant="h6" fontWeight={'bold'}>Pending Actions</Typography>
        <Typography variant="h6" fontWeight={'bold'}>Action Items</Typography>
        
        
        <button onClick={onClose}>Close</button>
    </Drawer>
    </>
);
export default MeetingDetailView;