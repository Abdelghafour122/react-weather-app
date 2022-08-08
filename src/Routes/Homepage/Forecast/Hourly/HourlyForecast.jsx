import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

import { getWeatherInfoHourly } from "../../../../Api/requests";

const HourlyForecast = ({
  locationLat,
  locationLon,
  language,
  temperature,
  convertToTime,
}) => {
  const [hourlyWeather, setHourlyWeather] = useState(Object);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(hourlyWeather).length !== 0) setLoading(false);
    else setLoading(true);
  }, [hourlyWeather]);

  useEffect(() => {
    const getHourlyForecast = async () => {
      setHourlyWeather(
        await getWeatherInfoHourly(
          locationLat,
          locationLon,
          language,
          temperature
        )
      );
    };
    getHourlyForecast();
  }, [locationLat, locationLon, language, temperature]);

  const getCurrentHour = () => {
    const date = convertToTime(
      hourlyWeather?.timezone_offset,
      hourlyWeather?.hourly[6].dt
    );

    return date.toLocaleString(`${language}`, {
      timeStyle: "short",
    });
  };

  return (
    <Box>
      {loading === true ? (
        <ThreeDots width="100" />
      ) : (
        <React.Fragment>
          <p>here is the hourly forecast</p>
          <p> {hourlyWeather?.hourly?.length} units </p>
          <p> {getCurrentHour()} </p>
          <p>
            {" "}
            {new Date().toLocaleDateString("en-US", {
              timeZone: hourlyWeather?.timezone,
              //   hour: "numeric",
              //   dateStyle: "full",
              timeZoneName: "short",
            })}{" "}
          </p>
          <pre> {JSON.stringify(hourlyWeather, null, 2)} </pre>
        </React.Fragment>
      )}
    </Box>
  );
};

export default HourlyForecast;
