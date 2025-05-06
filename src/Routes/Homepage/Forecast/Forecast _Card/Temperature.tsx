import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Temperature = ({ image, temp, unit }) => {
  return (
    <Box
      className="temp-holder"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <img src={image} alt="Weather icon" height="190px" />
      <Typography
        component="p"
        variant="p"
        color="text.primary"
        sx={{ fontSize: "90px" }}
      >
        {`${temp}°${unit}`}
      </Typography>
    </Box>
  );
};

export default Temperature;
