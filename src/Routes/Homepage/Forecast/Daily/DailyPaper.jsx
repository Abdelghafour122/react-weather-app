import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import NavigationIcon from "@mui/icons-material/Navigation";
import WbIncandescentRoundedIcon from "@mui/icons-material/WbIncandescentRounded";

const DailyPaper = ({ data, time, getTempUnit, language, timezone }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: "5px",
        backgroundColor: (theme) => theme.palette.custom.secondBgColor,
      }}
    >
      <Typography component="p" variant="body1">
        {`${new Date(time * 1000).toLocaleDateString(`${language}`, {
          weekday: "long",
          day: "numeric",
          month: "numeric",
        })}`}
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <Typography
        component="p"
        variant="h5"
        sx={{
          textTransform: "capitalize",
          marginTop: "15px",
          textAlign: "center",
        }}
      >
        {data.weather[0].description}
      </Typography>
      <img
        src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
        alt="Daily Forecast icon"
        height="115px"
      />
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h5" component="p">
          {`${Math.ceil(data.temp.max)}°${getTempUnit()} |`}
        </Typography>
        &nbsp;
        <Typography variant="h5" component="p" color="text.secondary">
          {` ${Math.floor(data.temp.min)}°${getTempUnit()}`}
        </Typography>
      </Box>
      <Typography component="p" variant="subtitle1" color="text.secondary">
        {`Feels like: ${Math.floor(data.feels_like.day)}°${getTempUnit()}`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "flex-start",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        <Tooltip title="Humidity" placement="left">
          <Box
            className="day-humidity"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <OpacityIcon fontSize="small" />
            <Typography component="p" variant="subtitle1">
              {`${data.humidity}%`}
            </Typography>
          </Box>
        </Tooltip>
        <Tooltip title="Wind" placement="left">
          <Box
            className="day-wind"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <AirIcon fontSize="small" />
            <Typography component="p" variant="subtitle1">
              {`${Math.floor(data.wind_speed)}km/h`}
            </Typography>
            <NavigationIcon
              fontSize="small"
              sx={{ transform: `rotate(${data.wind_deg}deg)` }}
            />
          </Box>
        </Tooltip>
        <Tooltip title="UV Index" placement="left">
          <Box
            className="day-uvindex"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <WbIncandescentRoundedIcon fontSize="small" />
            <Typography component="p" variant="subtitle1">
              {`${Math.ceil(data.uvi)}`}
            </Typography>
          </Box>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default DailyPaper;
