import { ExpandMore, InsertLink } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Typography,
} from "@mui/material";

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
      <Typography variant="h2" gutterBottom>
        Jira Suggestions
      </Typography>
      <Box>
        {stories.map((story) => (
          <Story story={story} />
        ))}
      </Box>
    </Box>
  );
};

const Story = ({ story }) => {
  const { assignee, description, title, acceptanceCriteria, url } = story;

  return (
    <Accordion>
      <AccordionSummary
        sx={{ marginBottom: "10px", marginTop: "10px" }}
        expandIcon={<ExpandMore />}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box id="body">
          <BodyStoryField label={"Description"} value={description} />
          <BodyStoryField
            label={"Acceptance Criteria"}
            value={acceptanceCriteria}
          />
        </Box>
        <Box id="footer">
          <FooterStoryField label={"Assignee"} value={assignee} />
          <JiraLink url={url} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const JiraLink = ({ url }) => {
  return (
    <Link href={url} rel="noopener" target="_blank">
      <InsertLink />
    </Link>
  );
};

const BodyStoryField = ({ label, value }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <Typography sx={{ width: "175px" }} variant="subtitle1">
        {label}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  );
};

const FooterStoryField = ({ label, value }) => {
  return (
    <Box>
      <Typography variant="h6">{label}</Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  );
};

export default JiraStories;
