import { ExpandMore, InsertLink } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { SectionTitle } from "~/utils/components";

const JiraStories = () => {
  // Fetch suggestions
  const stories = [
    {
      title: "Automate Jira Ticket Creation via API",
      description:
        "Enable automated creation of Jira tickets based on meeting action items through the Jira API in the backend.",
      assignee: "Salazar, Arturo",
      acceptanceCriteria:
        "Given meeting details in the app, when users choose to generate Jira tickets, then a Jira ticket should be created through the Jira API and its status should be viewable in the app.",
      url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10045",
    },
    {
      title: "Zoom Transcript Auto-Retrieval",
      description:
        "Implement automatic collection of Zoom meeting transcripts to be used in downstream processing.",
      assignee: "Campbell, Spencer",
      acceptanceCriteria:
        "Given a Zoom meeting has ended, when the transcript is available, the system should automatically retrieve and store it without manual intervention.",
      url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10046",
    },
    {
      title: "AI Meeting Summary and Action Automation",
      description:
        "Integrate the processing of Zoom transcripts with OpenAI to generate useful meeting documentation and trigger Jira ticket automation.",
      assignee: "Kartikeya Mishra",
      acceptanceCriteria:
        "Given a Zoom transcript, when it is processed by OpenAI, generate a meeting summary, a list of action items, and make API calls to create Jira tickets as appropriate.",
      url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10047",
    },
    {
      title: "Frontend for Meeting History and Search",
      description:
        "Develop frontend features for viewing, browsing, and searching meeting history, summaries, and associated Jira tickets.",
      assignee: "Eric",
      acceptanceCriteria:
        "Given past meetings and their associated data, when users access the UI, they should be able to browse and search past meeting summaries, notes, and Jira tickets.",
      url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10048",
    },
  ];

  return (
    <Box>
      <Box>
        <SectionTitle title="Jira Stories" section="jiras" />
        {stories.map((story) => (
          <Story story={story} />
        ))}
      </Box>
    </Box>
  );
};

const TextTable = ({ story }) => {
  const { acceptanceCriteria, assignee, description, url } = story;
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="Table for Jira details">
          <TableBody>
            <StoryRow label="Description" body={description} />
            <StoryRow label="Acceptance Criteria" body={acceptanceCriteria} />
            <StoryRow label="Assignee" body={assignee} />
            <StoryRow label="Jira link" body={url} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const StoryRow = ({ label, body }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell
        component="th"
        scope="row"
        sx={{ fontWeight: "bold", width: "175px" }}
      >
        {label}
      </TableCell>
      <TableCell>
        {label === "Jira link" ? <JiraLink url={body} /> : <p>{body}</p>}
      </TableCell>
    </TableRow>
  );
};

const Story = ({ story }) => {
  const { title } = story;
  return (
    <Accordion disableGutters={true}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="subtitle2">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <TextTable story={story} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const JiraLink = ({ url }) => {
  const link = "Issue-" + url.substring(url.length - 5, url.length);
  return (
    <Link href={url} rel="noopener" target="_blank">
      {link}
      <InsertLink
        fontSize="small"
        sx={{ marginLeft: "7px", transform: "rotate(315deg)" }}
      />
    </Link>
  );
};

export default JiraStories;
