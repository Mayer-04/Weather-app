import "./style.css";
import { getWeatherData } from "./services/weather-fetcher.ts";
import { renderLocation } from "./render/location.ts";
import { renderCoordinates } from "./render/coordinates.ts";
import { renderWeatherInfo } from "./render/weather-info.ts";
import { handleError } from "./utils/handle-error.ts";
import { changeColor } from "./utils/change-color.ts";
import {
  searchInput,
  searchButton,
  locationElement,
  coordinatesElement,
  weatherInfoContainer,
  weatherApp,
  errorContainer,
} from "./utils/dom-elements.ts";

const searchWeather = async (city: string) => {
  try {
    const weatherData = await getWeatherData(city);
    renderLocation(locationElement, weatherData);
    renderCoordinates(coordinatesElement, weatherData);
    renderWeatherInfo(weatherInfoContainer, weatherData);

    weatherApp.classList.remove("hidden");
    errorContainer.innerHTML = "";

    changeColor(weatherData);
  } catch (error) {
    handleError({ weatherApp, errorContainer, city });
  }
};

const loadDefaultWeather = async () => {
  await searchWeather("Bogota");
};

const handleWeatherSearch = async () => {
  const inputValue = searchInput.value.trim().toLowerCase();

  if (!inputValue) {
    await loadDefaultWeather();
    return;
  }

  await searchWeather(inputValue);

  searchInput.value = "";
};

window.addEventListener("DOMContentLoaded", loadDefaultWeather);
searchButton.addEventListener("click", handleWeatherSearch);
