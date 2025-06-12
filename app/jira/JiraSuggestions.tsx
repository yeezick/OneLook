import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { emptyJiraform } from "~/utils/constants";

const JiraSuggestions = () => {
  // Fetch suggestions
  const suggestions = [
    {
      title: "Integrate with OpenAi",
      description: "Lorem ipsum many things wow",
      acceptanceCriteria: "More lorem ipsum until forever and never",
    },
    {
      title: "Connect to Jira API",
      description: "Even more things what the heck",
      acceptanceCriteria: "Lorem ipsum will never end!!!!!!",
    },
  ];

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Jira Suggestions
      </Typography>
      <Box>
        {suggestions.map((suggestion) => (
          <Suggestion jiraFields={suggestion} />
        ))}
      </Box>
    </Box>
  );
};

const Suggestion = ({ jiraFields }) => {
  const [formFields, setFormFields] = useState(jiraFields);
  const { title } = formFields;

  return (
    <Accordion>
      <AccordionSummary>
        <Typography variant="h3">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <JiraForm formFields={formFields} setFormFields={setFormFields} />
      </AccordionDetails>
    </Accordion>
  );
};

const JiraForm = ({ formFields, setFormFields }) => {
  const handleFieldChange = (e) => {
    console.log("textfield", e);
  };

  return (
    <form>
      <FormTextField
        id="jira-title"
        label="Title"
        name="title"
        value={formFields.title}
        handleFieldChange={handleFieldChange}
      />
    </form>
  );
};

const FormTextField = ({ id, label, name, handleFieldChange, value }) => {
  return (
    <Box>
      <TextField
        id={id}
        label={label}
        name={name}
        onChange={handleFieldChange}
        value={value}
      />
    </Box>
  );
};

export default JiraSuggestions;
