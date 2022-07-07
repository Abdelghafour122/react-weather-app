import React, { useState } from "react";
import { useEffect } from "react";
import { getWeatherInfo } from "../Api/requests";

const Random = () => {
  const [weather, setWeather] = useState({});
  const val = 0;
  const getInfo = async () => {
    const result = await getWeatherInfo(20, 29);
    setWeather(result);
  };

  useEffect(() => {
    getInfo();
  }, [val]);

  console.log("first");
  return <pre>{JSON.stringify(weather, null, 2)}</pre>;
};

export default Random;
