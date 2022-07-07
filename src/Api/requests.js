import axios from "axios";

export const getWeatherInfo = (lat, lon) => {
  const result = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
      { headers: { accept: "Application/json" } }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};
