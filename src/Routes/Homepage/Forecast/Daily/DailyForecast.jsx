import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { ThreeDots } from "react-loader-spinner";
import { getWeatherInfoDaily } from "../../../../Api/requests";
import DailyPaper from "./DailyPaper";
import { Zoom } from "@mui/material";
const DailyForecast = ({
  locationLat,
  locationLon,
  language,
  temperature,
  convertToTime,
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
      //   console.log(
      //     await getWeatherInfoDaily(
      //       locationLat,
      //       locationLon,
      //       language,
      //       temperature
      //     )
      //   );

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
            {dailyWeather.daily.map((dayData, index) => {
              return (
                <Zoom
                  key={index}
                  in={true}
                  style={{ transitionDelay: `${index * 1}00ms` }}
                >
                  <Box>
                    <DailyPaper
                      data={dayData}
                      time={dayData.dt}
                      getTempUnit={getTempUnit}
                      language={language}
                      timezone={dailyWeather?.timezone}
                    />
                  </Box>
                </Zoom>
              );
            })}
          </Box>
          <pre> {JSON.stringify(dailyWeather.daily[0], null, 2)} </pre>
        </React.Fragment>
      )}
    </Box>
  );
};

export default DailyForecast;
