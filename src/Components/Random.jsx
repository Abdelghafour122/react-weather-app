import React, { useState } from "react";
import { useEffect } from "react";
import {
  getWeatherInfoCreds,
  getWeatherInfoDaily,
  getWeatherInfoHourly,
  getWeatherInfoName,
} from "../Api/requests";

// "lon": 16.3721,
// "lat": 48.2085

const Random = () => {
  const [weather, setWeather] = useState({});
  const getInfo = async () => {
    // const result = await getWeatherInfoCreds(20, 29, "de", "fahrenheit");
    // const result = await getWeatherInfoName("Vienna", "de", "fahrenheit");
    // const result = await getWeatherInfoDaily(48.2085, 16.3721);
    const result = await getWeatherInfoHourly(48.2085, 16.3721);
    setWeather(result);
  };

  useEffect(() => {
    getInfo();
    console.log(weather.data.hourly.length);
  }, []);

  console.log("first");
  return <pre>{JSON.stringify(weather, null, 2)}</pre>;
};

export default Random;
