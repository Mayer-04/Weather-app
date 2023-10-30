import { Weather } from "../types/weather-types.ts";
import { options } from "../config/options.ts";

export const getWeatherData = async (city: string) => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`);
    }
    const result: Weather = await response.json();

    const { location } = result;
    const { current } = result;
    const { name, country, lat } = location;
    const { condition, temp_c, humidity, wind_kph, is_day } = current;
    const { text, icon } = condition;

    return {
      cityName: name,
      country,
      latitude: lat,
      temp_c,
      humidity,
      wind_kph,
      is_day,
      weatherStatus: text,
      icon,
    };
  } catch (error) {
    throw new Error(`An error occurred while processing the request: ${error}`);
  }
};
