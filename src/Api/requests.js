import axios from "axios";

// FETCH BY COORDINATES
export const getWeatherInfoCoor = (coords, lang = "en", unit = "celsius") => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${
        coords.lon
      }&appid=${process.env.REACT_APP_API_KEY}&units=${
        unit === "fahrenheit" ? "imperial" : "metric"
      }&lang=${lang}`,
      { headers: { accept: "Application/json" } }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

// DETERMINE TEMPERATURE
const determineTemp = (value) => {
  if (value.toString().toLowerCase() === "fahrenheit") return "imperial";
  else if (value.toString().toLowerCase() === "celcius") return "metric";
  else return "default";
};

// FETCH BY NAME
export const getWeatherInfoName = (cityName, lang = "en", unit = "celsius") => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
        process.env.REACT_APP_API_KEY
      }&units=${determineTemp(unit)}&lang=${lang}`,
      { headers: { accept: "Application/json" } }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

// HOURLY FORECAST 48 HOURS
export const getWeatherInfoHourly = (
  lat,
  lon,
  lang = "en",
  unit = "celsius"
) => {
  const result = axios
    .get(
      //1fa9ff4126d95b8db54f3897a208e91c
      `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${
        process.env.REACT_APP_API_KEY
      }&units=${determineTemp(unit)}&lang=${lang}`,
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

// ON PAGE-LOAD POSITION FETCH
export const getCurrentLocationInfo = () => {
  const result = axios
    .get("http://ip-api.com/json/", { headers: { accept: "Application/json" } })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

export const getCities = (value, lang) => {
  const result = axios
    .get(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&minPopulation=500000&namePrefix=${value}&namePrefixDefaultLangResults=true&languageCode=${lang}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "ef4bc9b50dmsh41b50c5102fa3e0p1a5eb8jsnc0cfeee72f02",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          accept: "Application/json",
        },
      }
    )
    .then((res) => res.data)
    .catch(() => console.log("The city name is invalid"));

  return result;
};
