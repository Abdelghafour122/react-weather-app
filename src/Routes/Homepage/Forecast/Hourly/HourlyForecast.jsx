import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";

import { getWeatherInfoHourly } from "../../../../Api/requests";
import HourlyPaper from "./HourlyPaper";
import Loading from "./Loading";

const HourlyForecast = ({
  locationLat,
  locationLon,
  language,
  temperature,
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
        <Loading />
      ) : (
        <React.Fragment>
          <Grid
            container
            spacing={{ xs: 3, sm: 3, md: 2, lg: 1 }}
            columns={{ xs: 2, sm: 3, md: 6, lg: 12 }}
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
                    <Grid item xs={2} sm={1} md={1} lg={1}>
                      <HourlyPaper
                        data={hourData}
                        time={hourData.dt}
                        getTempUnit={getTempUnit}
                        language={language}
                        timezone={hourlyWeather?.timezone}
                      />
                    </Grid>
                  </Zoom>
                );
            })}
          </Grid>
        </React.Fragment>
      )}
    </Box>
  );
};

export default HourlyForecast;
