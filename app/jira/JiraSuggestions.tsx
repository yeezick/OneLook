import {
  CheckBoxOutlined,
  Code,
  ExpandMore,
  InsertLink,
  Search,
  Subject,
} from "@mui/icons-material";
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
import styles from "../details/styles";

const JiraStories = () => {
  // Fetch suggestions
  const stories = [
    {
      title: "Complete performance testing",
      description:
        "Complete performance testing of release candidate and confirm fallback procedures for payment API.",
      assignee: "Priya",
      acceptanceCriteria:
        "Release candidate passes all QA and performance tests with fallback procedure confirmed for payment API.",
      url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10007",
    },
    {
      title: "Publish customer support",
      description:
        "Publish customer support FAQ, distribute onboarding video and deliver internal training session.",
      assignee: "Alex",
      acceptanceCriteria:
        "FAQ doc available, onboarding video accessible, and training delivered before launch.",
      url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10008",
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

export const SectionTitle = ({ title, section }) => {
  const sectionIcons = {
    actions: <CheckBoxOutlined fontSize="large" />,
    jiras: <Code fontSize="large" />,
    notes: <Subject fontSize="large" />,
    overview: <Search fontSize="large" />,
  };

  const icon = sectionIcons[section];

  return (
    <Typography
      variant="h6"
      sx={{
        alignItems: "center",
        display: "flex",
        fontWeight: "bold",
        gap: "5px",
        lineHeight: "60px",
      }}
      style={styles.headers}
    >
      <div>{icon}</div>
      {title}
    </Typography>
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
