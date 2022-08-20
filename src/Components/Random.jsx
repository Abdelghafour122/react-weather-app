import React, { useState } from "react";
import { useEffect } from "react";
import {
  getWeatherInfoCoor,
  getWeatherInfoDaily,
  getWeatherInfoHourly,
  getWeatherInfoName,
  getCurrentLocationInfo,
  getCities,
} from "../Api/requests";

import { useTranslation } from "react-i18next";

// "lon": 16.3721,
// "lat": 48.2085

const Random = () => {
  const [weather, setWeather] = useState({});

  const [location, setLocation] = useState({});

  const getInfo = async () => {
    // const result = await getWeatherInfoCoor(20, 29, "de", "fahrenheit");
    const resulta = await getWeatherInfoName("London", "CA", "en", "");
    // const result = await getWeatherInfoDaily(48.2085, 16.3721);
    const result = await getWeatherInfoHourly(
      48.2085,
      16.3721,
      "en",
      "celcius"
    );
    // const result = await getCurrentLocationInfo();

    // setLocation(result);

    setWeather(resulta);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const { t } = useTranslation();
  let a = 900;
  return (
    <>
      {/* <pre>{JSON.stringify(weather, null, 2)}</pre>;
      <br />
      <br />
      <h1 style={{ color: "white" }}>{name}</h1>
      <br />
      <br />
      <pre>{JSON.stringify(location, null, 2)}</pre>; */}

      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </>
  );
};

export default Random;
