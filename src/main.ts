import "./style.css";
import { getWeatherData } from "./services/weather-fetcher.ts";
import { renderLocationElement } from "./render/location.ts";
import { renderCoordinatesElement } from "./render/coordinates.ts";
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

const weatherSearch = async (city: string) => {
  try {
    const weatherData = await getWeatherData(city);
    renderLocationElement(locationElement, weatherData);
    renderCoordinatesElement(coordinatesElement, weatherData);
    renderWeatherInfo(weatherInfoContainer, weatherData);

    weatherApp.classList.remove("hidden");
    errorContainer.innerHTML = "";

    changeColor(weatherData);
  } catch (error) {
    handleError({ weatherApp, errorContainer, city });
  }
};

const loadDefaultWeather = async () => {
  await weatherSearch("Bogota");
};

const handleWeatherSearch = async () => {
  const inputValue = searchInput.value.trim().toLowerCase();

  if (!inputValue) {
    await loadDefaultWeather();
    return;
  }

  await weatherSearch(inputValue);

  searchInput.value = "";
};

window.addEventListener("load", loadDefaultWeather);
searchButton.addEventListener("click", handleWeatherSearch);
