import React, { useState } from "react";
import { Typography } from "@mui/material";

const CurrentTime = ({ currentOffset, convertToTime }) => {
  const [localTime, setLocalTime] = useState(() =>
    convertToTime(currentOffset)
  );

  setInterval(() => {
    setLocalTime(() => convertToTime(currentOffset));
  }, 60000);

  return (
    <Typography component="p" variant="p" color="text.secondary">
      {`Current Local Time: ${localTime}`}
    </Typography>
  );
};

export default CurrentTime;
