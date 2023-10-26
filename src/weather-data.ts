import { Weather } from "./types/weather-types.ts";
import { options } from "./config/options.ts";

export const fetchWeather = async (city = "Bogotá") => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`ERROR HTTP: ${response.status}`);
    }
    const result: Weather = await response.json();

    const { location } = result;
    const { current } = result;
    const { name, country, lat } = location;
    const { condition, temp_c, humidity, wind_kph } = current;
    const { text, icon } = condition;

    return {
      name,
      country,
      lat,
      temp_c,
      humidity,
      wind_kph,
      text,
      icon,
    };
  } catch (error) {
    throw new Error(`ERROR: ${error}`);
  }
};
