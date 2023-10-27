import { fetchWeather } from "./weather-data.ts";

const loadDefaultWeather = async () => {
  try {
    const defaultWeather = await fetchWeather(); // Esto obtiene el clima de Bogotá por defecto
    renderLocation(location, defaultWeather);
    renderCoordination(coordinates, defaultWeather);
    renderWeather(weatherContainer, defaultWeather);
  } catch (error) {
    console.error(error);
  }
};
