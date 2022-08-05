import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import PlaceIcon from "@mui/icons-material/Place";
import NavigationIcon from "@mui/icons-material/Navigation";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { ThreeDots } from "react-loader-spinner";

import tempIcon from "../../Assets/cloud-moon-rain-solid.svg";
import InfoBox from "./Forecast/InfoBox";

const Forecast = ({ currentWeather, loading, temperature, language }) => {
  const countryName = new Intl.DisplayNames([`${language}`], {
    type: "region",
  });

  let time = new Date();

  const [currentHour, setCurrentHour] = useState(
    time.getHours().toLocaleString("en-US", { minimumIntegerDigits: 2 })
  );
  const [currentMinute, setCurrentMinute] = useState(
    time.getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2 })
  );
  const getTempUnit = () => {
    if (temperature === "Celcius") return "C";
    else if (temperature === "Fahrenheit") return "F";
    else if (temperature === "Kelvin") return "K";
  };
  const convertToTime = (offset, timeStamp) => {
    const now = !isNaN(timeStamp) ? new Date(timeStamp * 1000) : new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * (offset / 3600));
    return `${nd
      .getHours()
      .toLocaleString("en-US", { minimumIntegerDigits: 2 })}:${nd
      .getMinutes()
      .toLocaleString("en-US", { minimumIntegerDigits: 2 })}`;
  };

  setInterval(() => {
    let time = new Date();
    setCurrentHour(
      time.getHours().toLocaleString("en-US", { minimumIntegerDigits: 2 })
    );
    setCurrentMinute(
      time.getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2 })
    );
  }, 60000);
  return (
    <Box
      bgcolor="custom.firstBgColor"
      sx={{ minHeight: "100vh", marginTop: "30px" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <ThreeDots width="100" />
        ) : (
          <React.Fragment>
            <Box
              bgcolor="custom.firstBgColor"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "20px",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  backgroundColor: (theme) =>
                    theme.palette.custom.secondBgColor,
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "20px",
                    }}
                  >
                    <Box className="left">
                      <Typography
                        component="p"
                        variant="p"
                        color="text.primary"
                        sx={{ fontWeight: 700, letterSpacing: "3px" }}
                      >
                        CURRENT WEATHER
                      </Typography>
                      <Typography
                        component="p"
                        variant="p"
                        color="text.secondary"
                      >
                        {`Current Local Time: ${convertToTime(
                          currentWeather?.timezone
                        )}`}
                      </Typography>
                    </Box>
                    <Box
                      className="right"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PlaceIcon />
                      <Typography
                        variant="p"
                        component="p"
                        color="text.secondary"
                      >
                        {`${
                          currentWeather?.name !== ""
                            ? currentWeather?.name
                            : "Unknown Location"
                        }, ${
                          currentWeather?.sys?.hasOwnProperty("country")
                            ? countryName.of(currentWeather?.sys?.country)
                            : "Unknown country"
                        }.`}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className="main-info"
                    sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                  >
                    <Box
                      className="temp-holder"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        // image={tempIcon}
                        src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                        height="190px"
                        alt="Weather icon"
                      />
                      <Tooltip
                        placement="top"
                        title="Temperature unit can be changed in Settings! 👉"
                      >
                        <Badge badgeContent={"i"} color="warning">
                          <Typography
                            component="p"
                            variant="p"
                            color="text.primary"
                            sx={{ fontSize: "90px" }}
                          >
                            {/* 25°C */}
                            {`${Math.floor(
                              currentWeather?.main?.temp
                            )}°${getTempUnit()}`}
                          </Typography>
                        </Badge>
                      </Tooltip>
                    </Box>
                    <Box className="description-holder">
                      <Typography
                        component="p"
                        variant="p"
                        color="text.primary"
                      >
                        {/* Mostly cloudy */}
                        {currentWeather?.weather[0]?.main}
                      </Typography>
                      <Typography
                        component="p"
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {/* FEELS LIKE 24°{" "} */}
                        {`FEELS LIKE ${Math.floor(
                          currentWeather?.main?.feels_like
                        )}°`}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="sub-description">
                    <Typography component="p" variant="p" color="text.primary">
                      {`${
                        currentWeather.weather[0].description
                      }, the highest temperature will be ${Math.ceil(
                        currentWeather?.main?.temp_max
                      )}°, and the lowest will be ${Math.floor(
                        currentWeather?.main?.temp_min
                      )}°.`}
                      {/* Clear sky, the highest temperature will be 32°, and the
                      lowest 25°. */}
                    </Typography>
                  </Box>
                  <Grid
                    container
                    spacing={3}
                    columns={{ xs: 2, sm: 9, lg: 18 }}
                    sx={{ width: "100%", alignSelf: "center" }}
                  >
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"WIND"}
                        IconName={AirIcon}
                        info={
                          <>
                            {`${Math.ceil(currentWeather?.wind?.speed)}km/h`}{" "}
                            &nbsp; &nbsp;
                            <Tooltip
                              // title="Wind Angle 33°"
                              title={`Wind Angle ${currentWeather?.wind?.deg}°`}
                              enterDelay={500}
                              leaveDelay={200}
                            >
                              <NavigationIcon
                                sx={{
                                  transform: `rotate(${currentWeather?.wind?.deg}deg)`,
                                }}
                              />
                            </Tooltip>
                          </>
                        }
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"HUMIDITY"}
                        info={`${Math.floor(currentWeather?.main?.humidity)}%`}
                        IconName={OpacityIcon}
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"VISIBILITY"}
                        info={`${Math.floor(
                          currentWeather?.visibility / 1000
                        )}km`}
                        IconName={VisibilityIcon}
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"PRESSURE"}
                        info={`${Math.floor(currentWeather?.main?.pressure)}mb`}
                        IconName={CompressIcon}
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"SUNRISE"}
                        info={`${convertToTime(
                          currentWeather?.sys?.sunrise,
                          currentWeather?.timezone
                        )}`}
                        IconName={WbTwilightIcon}
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"SUNSET"}
                        info={`${convertToTime(
                          currentWeather?.sys?.sunset,
                          currentWeather?.timezone
                        )}`}
                        IconName={NightsStayIcon}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Typography
                  component="p"
                  variant="p"
                  color="text.primary"
                  sx={{ fontWeight: 700 }}
                >
                  Hourly Forecast:
                </Typography>
                <Card
                  sx={{
                    width: "100%",
                    backgroundColor: (theme) =>
                      theme.palette.custom.secondBgColor,
                  }}
                ></Card>
              </Box>
            </Box>
            <pre>{JSON.stringify(currentWeather, null, 2)}</pre>
          </React.Fragment>
        )}
      </Container>
    </Box>
  );
};

export default Forecast;
