import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const CurrentDate = ({ currentOffset, convertToTime, language }) => {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    setCurrentDate(() => convertToTime(currentOffset));
    console.log("date reset");
  }, [convertToTime, currentOffset]);

  const formatter = new Intl.DateTimeFormat(`${language}`, {
    timeZoneName: "short",
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  });

  return (
    <Typography component="p" variant="p" color="text.secondary">
      {`${formatter.format(currentDate)}.`}
    </Typography>
  );
};

export default CurrentDate;
