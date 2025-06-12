import {
  Box,
  Stack,
  TextField,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import React, { useState } from "react";

const SearchBar = ({ topActions, onFilter, children }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onFilter) {
      onFilter(value);
    }
  };

  return (
    <Grid item xs={4}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="left"
        width="100%"
        style={{
          marginBottom: "16px",
        }}
      >
        <Stack spacing={2} sx={{ width: 300 }}>
          <TextField
            label="Search meetings"
            type="search"
            value={query}
            onChange={handleChange}
            fullWidth
          />
          <List>
            {topActions
              .filter((action) =>
                action.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((option) => (
                <ListItem key={option.title} disablePadding>
                  {children}
                </ListItem>
              ))}
          </List>
        </Stack>
      </Box>
    </Grid>
  );
};

export default SearchBar;
