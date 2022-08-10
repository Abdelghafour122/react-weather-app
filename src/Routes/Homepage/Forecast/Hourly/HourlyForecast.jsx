import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import Card from "@mui/material/Card";
import { ThreeDots } from "react-loader-spinner";

import { getWeatherInfoHourly } from "../../../../Api/requests";
import HourlyPaper from "./HourlyPaper";

const HourlyForecast = ({
  locationLat,
  locationLon,
  language,
  temperature,
  convertToTime,
  getTempUnit,
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
    <Box className="hourly-forecast">
      {loading === true ? (
        <ThreeDots width="100" />
      ) : (
        <React.Fragment>
          <p> {hourlyWeather?.hourly?.length} units </p>
          <p> {getCurrentHour()} </p>
          <p>
            {" "}
            {new Date().toLocaleDateString("en-US", {
              timeZone: hourlyWeather?.timezone,
              timeZoneName: "short",
            })}{" "}
          </p>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {hourlyWeather?.hourly.map((hourData, index) => {
              //   console.log(hourData);
              return (
                <Zoom
                  key={index}
                  in={true}
                  style={{ transitionDelay: `${index * 1}00ms` }}
                >
                  <Box>
                    <HourlyPaper
                      data={hourData}
                      time={index + 1}
                      convertToTime={convertToTime}
                      getTempUnit={getTempUnit}
                    />
                  </Box>
                </Zoom>
              );
            })}
          </Box>
          <pre> {JSON.stringify(hourlyWeather, null, 2)} </pre>
        </React.Fragment>
      )}
    </Box>
  );
};

export default HourlyForecast;
