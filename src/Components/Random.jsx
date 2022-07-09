import React, { useState } from "react";
import { useEffect } from "react";
import { getWeatherInfoCreds, getWeatherInfoName } from "../Api/requests";

const Random = () => {
  const [weather, setWeather] = useState({});
  const getInfo = async () => {
    // const result = await getWeatherInfoCreds(20, 29, "de", "fahrenheit");
    const result = await getWeatherInfoName("Vienna", "de", "fahrenheit");
    setWeather(result);
  };

  useEffect(() => {
    getInfo();
    // console.log(weather);
  }, []);

  console.log("first");
  return <pre>{JSON.stringify(weather, null, 2)}</pre>;
};

export default Random;
