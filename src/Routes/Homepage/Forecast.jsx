import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import NavigationIcon from "@mui/icons-material/Navigation";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { ThreeDots } from "react-loader-spinner";

import InfoBox from "./Forecast/Forecast _Card/InfoBox";
import CurrentTime from "./Forecast/Forecast _Card/CurrentTime";
import CurrentDate from "./Forecast/Forecast _Card/CurrentDate";
import HourlyForecast from "./Forecast/Hourly/HourlyForecast";
import DailyForecast from "./Forecast/Daily/DailyForecast";
import CurrentLocation from "./Forecast/Forecast _Card/CurrentLocation";
import Temperature from "./Forecast/Forecast _Card/Temperature";
import Description from "./Forecast/Forecast _Card/Description";
import SubDescription from "./Forecast/Forecast _Card/SubDescription";

const Forecast = ({ currentWeather, loading, temperature, language }) => {
  const countryName = new Intl.DisplayNames([`${language}`], {
    type: "region",
  });

  const getTempUnit = () => {
    if (temperature === "Celcius") return "C";
    else if (temperature === "Fahrenheit") return "F";
    else if (temperature === "Kelvin") return "K";
  };
  const convertToTime = (offset, timeStamp) => {
    const now =
      timeStamp === undefined ? new Date() : new Date(timeStamp * 1000);
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const inp = Number(utc) + 3600000 * (Number(offset) / 3600);
    const nd = new Date(inp);

    return nd;
  };

  const formatNum = (num) => {
    return `${num.toLocaleString("en-US", { minimumIntegerDigits: 2 })}`;
  };

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
                      <CurrentTime
                        currentOffset={currentWeather?.timezone}
                        convertToTime={convertToTime}
                        language={language}
                      />
                    </Box>
                    <Box
                      className="right"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                      }}
                    >
                      <CurrentLocation
                        cityName={
                          currentWeather?.name !== ""
                            ? currentWeather?.name
                            : "Unknown Location"
                        }
                        countryName={
                          currentWeather?.sys?.hasOwnProperty("country")
                            ? countryName.of(currentWeather?.sys?.country)
                            : "Unknown country"
                        }
                      />
                      <CurrentDate
                        lat={currentWeather?.coord?.lat}
                        lon={currentWeather?.coord?.lon}
                        language={language}
                      />
                    </Box>
                  </Box>
                  <Box
                    className="main-info"
                    sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                  >
                    <Temperature
                      image={`http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
                      temp={Math.floor(currentWeather?.main?.temp)}
                      unit={getTempUnit()}
                    />
                    <Description
                      description={currentWeather?.weather[0]?.description}
                      feelsLike={Math.floor(currentWeather?.main?.feels_like)}
                    />
                  </Box>
                  <SubDescription
                    description={currentWeather.weather[0].description}
                    tempHigh={Math.ceil(currentWeather?.main?.temp_max)}
                    tempLow={Math.floor(currentWeather?.main?.temp_min)}
                  />
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
                        info={`${formatNum(
                          convertToTime(
                            currentWeather?.timezone,
                            currentWeather?.sys?.sunrise
                          ).getHours()
                        )}:${formatNum(
                          convertToTime(
                            currentWeather?.timezone,
                            currentWeather?.sys?.sunrise
                          ).getMinutes()
                        )}`}
                        IconName={WbTwilightIcon}
                      />
                    </Grid>
                    <Grid item xs={2} sm={3} lg={3}>
                      <InfoBox
                        unit={"SUNSET"}
                        info={`${formatNum(
                          convertToTime(
                            currentWeather?.timezone,
                            currentWeather?.sys?.sunset
                          ).getHours()
                        )}:${formatNum(
                          convertToTime(
                            currentWeather?.timezone,
                            currentWeather?.sys?.sunset
                          ).getMinutes()
                        )}`}
                        IconName={NightsStayIcon}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              {/* BREAK THIS INTO A COMPONENT */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
                  marginTop: "50px",
                }}
              >
                <Typography
                  component="p"
                  variant="p"
                  color="text.primary"
                  sx={{ fontWeight: 700 }}
                >
                  Hourly Forecast: (next 12 hours)
                </Typography>
                <HourlyForecast
                  locationLat={currentWeather?.coord?.lat}
                  locationLon={currentWeather?.coord?.lon}
                  language={language}
                  temperature={temperature}
                  convertToTime={convertToTime}
                  getTempUnit={getTempUnit}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
                  marginTop: "50px",
                }}
              >
                <Typography
                  component="p"
                  variant="p"
                  color="text.primary"
                  sx={{ fontWeight: 700 }}
                >
                  Daily Forecast: (next 8 days)
                </Typography>
                <DailyForecast
                  locationLat={currentWeather?.coord?.lat}
                  locationLon={currentWeather?.coord?.lon}
                  language={language}
                  temperature={temperature}
                  convertToTime={convertToTime}
                  getTempUnit={getTempUnit}
                />
              </Box>
            </Box>
          </React.Fragment>
        )}
      </Container>
    </Box>
  );
};

export default Forecast;
