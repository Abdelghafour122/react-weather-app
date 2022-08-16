import React, { useState } from "react";
import { Typography } from "@mui/material";

const CurrentTime = ({ currentOffset, convertToTime, language }) => {
  const [localTime, setLocalTime] = useState(() =>
    convertToTime(currentOffset)
  );

  setInterval(() => {
    setLocalTime(() => convertToTime(currentOffset));
  }, 60000);

  return (
    <Typography component="p" variant="p" color="text.secondary">
      {`Current Local Time: 
       ${localTime.toLocaleString(`${language}`, {
         timeStyle: "short",
       })}`}
    </Typography>
  );
};

export default CurrentTime;
