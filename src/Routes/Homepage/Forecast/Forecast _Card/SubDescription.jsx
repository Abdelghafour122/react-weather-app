import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SubDescription = ({ description, tempHigh, tempLow }) => {
  return (
    <Box className="sub-description">
      <Typography component="p" variant="p" color="text.primary">
        {`${description}, the highest temperature will be ${tempHigh}°, and the lowest will be ${tempLow}°.`}
      </Typography>
    </Box>
  );
};

export default SubDescription;
