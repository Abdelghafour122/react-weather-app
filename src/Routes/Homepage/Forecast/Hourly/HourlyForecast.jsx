import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
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

  return (
    <Box className="hourly-forecast" sx={{ width: "100%" }}>
      {loading === true ? (
        <ThreeDots width="100" />
      ) : (
        <React.Fragment>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: "15px",
            }}
          >
            {hourlyWeather?.hourly.map((hourData, index) => {
              if (index >= 12) return null;
              else
                return (
                  <Zoom
                    key={index}
                    in={true}
                    style={{ transitionDelay: `${index * 1}00ms` }}
                  >
                    <Box>
                      <HourlyPaper
                        data={hourData}
                        time={hourData.dt}
                        convertToTime={convertToTime}
                        getTempUnit={getTempUnit}
                        language={language}
                        timezone={hourlyWeather?.timezone}
                      />
                    </Box>
                  </Zoom>
                );
            })}
          </Box>
          {/* <pre> {JSON.stringify(hourlyWeather, null, 2)} </pre> */}
        </React.Fragment>
      )}
    </Box>
  );
};

export default HourlyForecast;
