import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import { getWeatherInfoDaily } from "../../../../Api/requests";
import DailyPaper from "./DailyPaper";
import Loading from "./Loading";
const DailyForecast = ({
  locationLat,
  locationLon,
  language,
  temperature,
  getTempUnit,
}) => {
  const [dailyWeather, setDailyWeather] = useState(Object);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(dailyWeather).length !== 0) setLoading(false);
    else setLoading(true);
  }, [dailyWeather]);

  useEffect(() => {
    const getDailyForecast = async () => {
      setDailyWeather(
        await getWeatherInfoDaily(
          locationLat,
          locationLon,
          language,
          temperature
        )
      );
    };
    getDailyForecast();
  }, [locationLat, locationLon, language, temperature]);

  return (
    <Box className="daily-forecast" sx={{ width: "100%" }}>
      {loading === true ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Grid
            container
            spacing={{ xs: 3, sm: 3, md: 3, xl: 1 }}
            columns={{ xs: 2, sm: 8, md: 16, xl: 16 }}
            sx={{ width: "100%", alignSelf: "center" }}
          >
            {dailyWeather.daily.map((dayData, index) => {
              return (
                <Zoom
                  key={index}
                  in={true}
                  style={{ transitionDelay: `${index * 1}00ms` }}
                >
                  <Grid item xs={2} sm={4} md={4} xl={2}>
                    <DailyPaper
                      data={dayData}
                      time={dayData.dt}
                      getTempUnit={getTempUnit}
                      language={language}
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

export default DailyForecast;
