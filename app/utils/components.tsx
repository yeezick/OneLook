import { CheckBoxOutlined, Code, Search, Subject } from "@mui/icons-material";
import { Typography } from "@mui/material";
import styles from "./styles";

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
