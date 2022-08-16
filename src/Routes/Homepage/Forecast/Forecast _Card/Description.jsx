import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Description = ({ description, feelsLike }) => {
  return (
    <Box className="description-holder">
      <Typography
        component="p"
        variant="p"
        color="text.primary"
        sx={{ textTransform: "capitalize" }}
      >
        {description}
      </Typography>
      <Typography component="p" variant="subtitle1" color="text.secondary">
        {`FEELS LIKE ${feelsLike}°`}
      </Typography>
    </Box>
  );
};

export default Description;
