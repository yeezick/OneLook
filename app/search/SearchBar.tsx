import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
const SearchBar = () => (
  <Grid size={4} spacing={2} container>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      style={{
        marginBottom: "50px",
      }}
    >
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={topActions.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              slotProps={{
                input: {
                  ...params.InputProps,
                  type: "search",
                },
              }}
            />
          )}
        />
      </Stack>
    </Box>
  </Grid>
);
export default SearchBar;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

const topActions = [
  { title: "Action 1", id: 1 },
  { title: "Action 2", id: 2 },
  { title: "Action 3", id: 3 },
  { title: "Action 4", id: 4 },
  { title: "Action 5", id: 5 },
  { title: "Action 6", id: 6 },
  { title: "Action 7", id: 7 },
  { title: "Action 8", id: 8 },
  { title: "Action 9", id: 9 },
  { title: "Action 10", id: 10 },
];
