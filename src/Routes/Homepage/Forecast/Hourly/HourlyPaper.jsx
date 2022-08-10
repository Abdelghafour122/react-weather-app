import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const HourlyPaper = ({ data, time, convertToTime, language, getTempUnit }) => {
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
      <img
        src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        alt="Hourly Forecast icon"
      />
      <Typography component="p" variant="body1">
        {`${Math.floor(data.temp)}°${getTempUnit()}`}
      </Typography>
      <Typography component="p" variant="subtitle1">
        {data.weather[0].main}
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Typography component="p" variant="body1">
        {time >= 24
          ? `${(time - 24).toLocaleString("en-US", {
              minimumIntegerDigits: 2,
            })}:00`
          : `${time.toLocaleString("en-US", { minimumIntegerDigits: 2 })}:00`}
      </Typography>
    </Paper>
  );
};

export default HourlyPaper;
