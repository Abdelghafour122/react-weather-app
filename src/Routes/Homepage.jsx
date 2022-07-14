import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "./Homepage/Navbar";
import { getCurrentLocationInfo, getWeatherInfoName } from "../Api/requests";
import Forecast from "./Homepage/Forecast";
import Attribution from "../Components/Attribution";

import Random from "../Components/Random";

const Homepage = ({ handleChangeTheme }) => {
  const [language, setLanguage] = useState("en");
  const [currentCityName, setCurrentCityName] = useState(String);
  const [coordinates, setCoordinates] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});
  const [temperature, setTemperature] = useState("Celcius");
  const [loading, setLoading] = useState(true);

  // CHANGE TEMPERATURE FUNCTION
  const handleChangeTemperature = (temperature) => {
    setTemperature(temperature);
  };

  // SETTING THE TEMPERATURE UNIT FROM LOCALSTORAGE ON PAGE LOAD IF IT EXISTS
  // ELSE WE SAVE THE DEFAULT "Celcius"
  useEffect(() => {
    const localTemperature = localStorage.getItem("temp-unit");
    localTemperature === null
      ? localStorage.setItem("temp-unit", "Celcius")
      : handleChangeTemperature(localTemperature);
  }, []);

  // CHANGE LANGUAGE FUNCTION
  const handleChangeLanguage = (choice) => {
    setLanguage(choice);
  };

  // FETCHING THE CURRENT LOCATION ON PAGELOAD, WITHOUT SEARCHING
  useEffect(() => {
    const getCurrentCity = async () => {
      const currentLocation = await getCurrentLocationInfo();
      setCurrentCityName(currentLocation.city);
    };
    getCurrentCity();
    setLoading(true);
  }, []);

  // GET WEATHER WHENEVER THE NAME CHANGES, ALSO ON PAGELOAD WITH CURRENT LOCATION
  useEffect(() => {
    const getWeatherByName = async () => {
      setCurrentWeather(await getWeatherInfoName(currentCityName));
    };
    currentCityName !== "" && getWeatherByName();
  }, [currentCityName]);

  // GET WEATHER WHENEVER THE COORDINATES CHANGE
  useEffect(() => {}, [coordinates]);

  // SET LOADING TO TRUE WHENEVER THE COORDINATES OR NAME CHANGE
  useEffect(() => {
    setLoading(true);
  }, [coordinates, currentCityName]);

  // SET LOADING TO TRUE WHENEVER THE CURRENTWEATHER CHANGES "WHEN THE FETCH IS FINISHED"
  useEffect(() => {
    setLoading(false);
  }, [currentWeather]);

  return (
    <Box component="div" className="homepage">
      <Navbar
        handleChangeTheme={handleChangeTheme}
        handleChangeLanguage={handleChangeLanguage}
        handleChangeTemperature={handleChangeTemperature}
      />
      {/* <Forecast
        loading={loading}
        currentCityName={currentCityName}
        currentWeather={currentWeather}
      /> */}
      <Random />
      <Attribution />
    </Box>
  );
};

export default Homepage;
