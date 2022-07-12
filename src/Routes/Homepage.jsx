import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "./Homepage/Navbar";
import { getCurrentLocationInfo, getWeatherInfoName } from "../Api/requests";
import Forecast from "./Homepage/Forecast";
import Attribution from "../Components/Attribution";

const Homepage = ({ handleChangeTheme }) => {
  const [language, setLanguage] = useState("en");
  const handleChangeLanguage = (choice) => {
    setLanguage(choice);
  };

  const [loading, setLoading] = useState(true);
  const [currentCityName, setCurrentCityName] = useState(String);
  const [coordinates, setCoordinates] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  useEffect(() => {
    const getCurrentCity = async () => {
      const currentLocation = await getCurrentLocationInfo();
      setCurrentCityName(currentLocation.city);
    };
    getCurrentCity();
    setLoading(true);
  }, []);

  useEffect(() => {
    const getWeatherByName = async () => {
      setCurrentWeather(await getWeatherInfoName(currentCityName));
    };
    currentCityName !== "" && getWeatherByName();
  }, [currentCityName]);

  useEffect(() => {}, [coordinates]);

  useEffect(() => {
    setLoading(true);
  }, [coordinates, currentCityName]);

  useEffect(() => {
    setLoading(false);
  }, [currentWeather]);

  return (
    <Box component="div" className="homepage">
      <Navbar
        handleChangeTheme={handleChangeTheme}
        handleChangeLanguage={handleChangeLanguage}
      />
      <Forecast
        loading={loading}
        currentCityName={currentCityName}
        currentWeather={currentWeather}
      />
      <Attribution />
    </Box>
  );
};

export default Homepage;
