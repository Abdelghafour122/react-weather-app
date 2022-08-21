import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Navbar from "./Homepage/Navbar";
import {
  getCurrentLocationInfo,
  getWeatherInfoCoor,
  getWeatherInfoName,
} from "../Api/requests";
import Forecast from "./Homepage/Forecast";

import Random from "../Components/Random";

const Homepage = ({ handleChangeTheme, handleChangeLanguage, language }) => {
  const [currentCityName, setCurrentCityName] = useState(String);
  const [currentCountryCode, setCurrentCountryCode] = useState(String);
  const [coordinates, setCoordinates] = useState({});
  const [currentWeather, setCurrentWeather] = useState(Object);
  const [temperature, setTemperature] = useState("Celcius");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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

  // CHANGE COUNTRY NAME
  const handleChangeCurrentName = (newCityName) => {
    setCurrentCityName(newCityName);
  };

  // CHANGE COUNTRY CODE
  const handleChangeCurrentCountryCode = (newCountryCode) => {
    setCurrentCountryCode(newCountryCode);
  };

  // CHANGE COORDINATES
  const handleChangeCoordinates = (newCoordinates) => {
    setCoordinates(newCoordinates);
  };

  // FETCHING THE CURRENT LOCATION ON PAGELOAD, WITHOUT SEARCHING
  useEffect(() => {
    const getCurrentCityInfo = async () => {
      await getCurrentLocationInfo().then((res) => {
        handleChangeCurrentName(res.city);
        handleChangeCurrentCountryCode(res.countryCode);
      });
    };
    getCurrentCityInfo();
  }, []);

  // GET WEATHER WHENEVER THE NAME CHANGES, ALSO ON PAGELOAD WITH CURRENT LOCATION
  useEffect(() => {
    const getWeatherByName = async () => {
      setCurrentWeather(
        await getWeatherInfoName(
          currentCityName,
          currentCountryCode,
          language,
          temperature
        )
      );
    };
    currentCityName && currentCountryCode && getWeatherByName();
  }, [currentCityName, currentCountryCode, language, temperature]);

  // GET WEATHER WHENEVER THE COORDINATES CHANGE
  useEffect(() => {
    const getWeatherByCoordinates = async () => {
      setCurrentWeather(
        await getWeatherInfoCoor(coordinates, language, temperature)
      );
    };
    Object.keys(coordinates).length !== 0 && getWeatherByCoordinates();
  }, [coordinates, language, temperature]);

  // SET LOADING TO TRUE WHENEVER THE COORDINATES OR NAME CHANGE
  useEffect(() => {
    setLoading(true);
  }, [coordinates, currentCityName, currentCountryCode]);

  // SET LOADING TO FALSE WHENEVER THE CURRENTWEATHER CHANGES "WHEN THE FETCH IS FINISHED"
  useEffect(() => {
    if (currentWeather === undefined) {
      navigate("/error");
      return;
    }
    if (Object.keys(currentWeather).length !== 0) setLoading(false);
  }, [currentWeather, navigate]);

  console.log(currentWeather);

  return (
    <Box component="div" className="homepage">
      <Navbar
        handleChangeTheme={handleChangeTheme}
        handleChangeLanguage={handleChangeLanguage}
        handleChangeTemperature={handleChangeTemperature}
        handleChangeCurrentName={handleChangeCurrentName}
        handleChangeCurrentCountryCode={handleChangeCurrentCountryCode}
        handleChangeCoordinates={handleChangeCoordinates}
      />
      <Forecast
        loading={loading}
        currentWeather={currentWeather}
        temperature={temperature}
        language={language}
      />
    </Box>
  );
};

export default Homepage;
