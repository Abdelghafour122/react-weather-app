import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";

const CurrentLocation = ({ cityName, countryName }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PlaceIcon />
      <Typography variant="p" component="p" color="text.secondary">
        {`${cityName}, ${countryName}.`}
      </Typography>
    </Box>
  );
};

export default CurrentLocation;
