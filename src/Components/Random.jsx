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

// "lon": 16.3721,
// "lat": 48.2085

const Random = () => {
  const [weather, setWeather] = useState({});
  const [icon, setIcon] = useState(Number);
  const [name, setName] = useState("");

  const [location, setLocation] = useState({});

  const getInfo = async () => {
    // const result = await getWeatherInfoCoor(20, 29, "de", "fahrenheit");
    const resulta = await getWeatherInfoName("london", "en", "");
    // const result = await getWeatherInfoDaily(48.2085, 16.3721);
    const result = await getWeatherInfoHourly(48.2085, 16.3721, "de");
    // const result = await getCurrentLocationInfo();

    // setLocation(result);

    setWeather(result);
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

    setName(regionNames.of(resulta.sys.country));
    setIcon(resulta.weather[0].icon);

    // setLocation(await getCities("boston", "en"));

    // console.log(weather.daily.length);
  };

  useEffect(() => {
    getInfo();
  }, []);

  // console.log("first");

  return (
    <>
      {/* <pre>{JSON.stringify(weather, null, 2)}</pre>;
      <br />
      <br />
      <h1 style={{ color: "white" }}>{name}</h1>
      <br />
      <br />
      <pre>{JSON.stringify(location, null, 2)}</pre>; */}

      {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}

      {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /> */}
    </>
  );
};

export default Random;
