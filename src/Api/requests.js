import axios from "axios";

export const getWeatherInfoCreds = (
  lat,
  lon,
  lang = "en",
  unit = "celsius"
) => {
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
