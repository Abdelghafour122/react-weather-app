import React from "react";
import { Box, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <Box component="div">
      <Typography
        color="text.primary"
        component="h1"
        variant="h1"
        fontFamily="PT serif"
        fontWeight="700"
      >
        Welcome to W-Weather
      </Typography>
    </Box>
  );
};

export default Homepage;
