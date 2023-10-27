import "./style.css";
import { fetchWeatherData } from "./weather-data.ts";
import { renderLocationElement } from "./render/render-location.ts";
import { renderCoordinatesElement } from "./render/render-coordinates.ts";
import { renderWeatherInfo } from "./render/render-weather.ts";
import { handleError } from "./utils/handle-error.ts";

const searchInput = document.querySelector(".search-input") as HTMLInputElement;
const searchButton = document.getElementById("search") as HTMLDivElement;
const locationElement = document.getElementById("location") as HTMLElement;
const coordinatesElement = document.getElementById(
  "coordinates"
) as HTMLElement;
const weatherInfoContainer = document.getElementById("weather") as HTMLElement;
const weatherApp = document.getElementById("weather-app") as HTMLDivElement;
const errorContainer = document.getElementById("message-error") as HTMLElement;

const weatherSearch = async (city: string) => {
  try {
    const weatherData = await fetchWeatherData(city);
    renderLocationElement(locationElement, weatherData);
    renderCoordinatesElement(coordinatesElement, weatherData);
    renderWeatherInfo(weatherInfoContainer, weatherData);
  } catch (error) {
    handleError(weatherApp, errorContainer, city);
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
