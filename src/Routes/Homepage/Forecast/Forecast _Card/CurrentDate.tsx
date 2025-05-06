import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { getWeatherInfoHourly } from "../../../../Api/requests";

const CurrentDate = ({ lat, lon, language }) => {
  const currentDate = new Date();
  const [currentTimezone, setCurrentTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  useEffect(() => {
    const getCurrentTimezone = async () => {
      setCurrentTimezone(
        await getWeatherInfoHourly(lat, lon, language).then(
          (res) => res.timezone
        )
      );
    };
    getCurrentTimezone();
  }, [lat, lon, language]);

  const formatter = new Intl.DateTimeFormat(`${language}`, {
    timeZone: currentTimezone,
    timeZoneName: "shortOffset",
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
