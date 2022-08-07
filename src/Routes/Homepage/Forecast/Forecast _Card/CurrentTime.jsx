import React, { useState } from "react";
import { Typography } from "@mui/material";

const CurrentTime = ({ currentOffset, convertToTime, formatNum, language }) => {
  const [localTime, setLocalTime] = useState(() =>
    convertToTime(currentOffset)
  );

  setInterval(() => {
    setLocalTime(() => convertToTime(currentOffset));
  }, 60000);

  return (
    <Typography component="p" variant="p" color="text.secondary">
      {/* JUST INCASE ${formatNum(localTime.getHours())}:${formatNum(localTime.getMinutes())} */}
      {`Current Local Time: 
       ${localTime.toLocaleString(`${language}`, {
         timeStyle: "short",
       })}`}
    </Typography>
  );
};

export default CurrentTime;
