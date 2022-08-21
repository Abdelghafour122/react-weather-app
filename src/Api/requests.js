import axios from "axios";

// FETCH BY COORDINATES
export const getWeatherInfoCoor = (coords, lang = "en", unit = "celcius") => {
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
export const getWeatherInfoName = (
  cityName,
  countryCode,
  lang = "en",
  unit = "celcius"
) => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${
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
  unit = "celcius"
) => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${
        process.env.REACT_APP_API_KEY
      }&units=${determineTemp(unit)}&lang=${lang}`,
      { headers: { accept: "Application/json" } }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

// DAILY FORECAST 8 DAYS
export const getWeatherInfoDaily = (
  lat,
  lon,
  lang = "en",
  unit = "celcius"
) => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?&lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${
        process.env.REACT_APP_API_KEY
      }&&units=${determineTemp(unit)}&lang=${lang}`,
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
    .then((res) => {
      return { city: res?.data?.city, countryCode: res?.data?.countryCode };
    })
    .catch((err) => console.log(err));
  return result;
};

// FETCH CITIES FOR NAME SEARCH
export const getCities = (value, lang) => {
  let langCode = lang.split("").splice(0, 2).join("");
  const result = axios
    .get(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=7&minPopulation=200000&namePrefix=${value}&languageCode=${langCode}`, //&namePrefixDefaultLangResults=true&languageCode=${lang}
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
    .catch((err) => console.log(err));

  return result;
};
