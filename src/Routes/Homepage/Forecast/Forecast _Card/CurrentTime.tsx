import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const CurrentTime = ({ currentOffset, convertToTime, language }) => {
  const [localTime, setLocalTime] = useState(() =>
    convertToTime(currentOffset)
  );

  const { t } = useTranslation();

  setInterval(() => {
    setLocalTime(() => convertToTime(currentOffset));
  }, 60000);

  return (
    <Typography component="p" variant="p" color="text.secondary">
      {t("Forecast_Card.cur_time", {
        current_time: localTime.toLocaleString(`${language}`, {
          timeStyle: "short",
        }),
      })}
    </Typography>
  );
};

export default CurrentTime;
