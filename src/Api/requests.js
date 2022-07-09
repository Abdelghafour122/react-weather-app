import axios from "axios";

// FETCH BY COORDINATES
export const getWeatherInfoCoor = (lat, lon, lang = "en", unit = "celsius") => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        process.env.REACT_APP_API_KEY
      }&units=${unit === "fahrenheit" ? "imperial" : "metric"}&lang=${lang}`,
      { headers: { accept: "Application/json" } }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

// FETCH BY NAME
export const getWeatherInfoName = (cityName, lang = "en", unit = "celsius") => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
        process.env.REACT_APP_API_KEY
      }&units=${unit === "fahrenheit" ? "imperial" : "metric"}&lang=${lang}`,
      { headers: { accept: "Application/json" } }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

// HOURLY FORECAST 48 HOURS
export const getWeatherInfoHourly = (lat, lon) => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric`,
      { headers: { accept: "Application/json" } }
    )
    .catch((err) => console.log(err));
  return result;
};

// DAILY FORECAST 8 DAYS
export const getWeatherInfoDaily = (lat, lon) => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric`,
      { headers: { accept: "Application/json" } }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};
