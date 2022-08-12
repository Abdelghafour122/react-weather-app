import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const HourlyPaper = ({
  data,
  time,
  convertToTime,
  language,
  getTempUnit,
  timezone,
}) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: (theme) => theme.palette.custom.secondBgColor,
      }}
    >
      <Typography component="p" variant="body1">
        {`${new Date(time * 1000).toLocaleDateString(`${language}`, {
          weekday: "short",
          day: "numeric",
          month: "numeric",
        })}`}
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <img
        src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        alt="Hourly Forecast icon"
      />
      <Typography component="p" variant="body1">
        {`${Math.floor(data.temp)}°${getTempUnit()}`}
      </Typography>
      <Typography
        component="p"
        variant="body1"
        sx={{
          textAlign: "center",
          lineHeight: 1,
          margin: "10px 0",
          textTransform: "capitalize",
        }}
      >
        {data.weather[0].description}
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Typography component="p" variant="body1">
        {new Date(time * 1000).toLocaleString(`${language}`, {
          minimumIntegerDigits: 2,
          timeZone: timezone,
          timeStyle: "short",
        })}
      </Typography>
    </Paper>
  );
};

export default HourlyPaper;
