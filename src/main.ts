import "./style.css";
import { fetchWeather } from "./weather-data.ts";
import { renderLocation } from "./render/render-location.ts";
import { renderCoordination } from "./render/render-coordinates.ts";
import { renderWeather } from "./render/render-weather.ts";
import { handleError } from "./utils/handle-error.ts";

const input = document.querySelector(".search-input") as HTMLInputElement;
const search = document.getElementById("search") as HTMLDivElement;
const weatherApp = document.getElementById("weather-app") as HTMLElement;
const locationElement = document.getElementById("location") as HTMLElement;
const coordinates = document.getElementById("coordinates") as HTMLElement;
const weatherContainer = document.getElementById("weather") as HTMLElement;

const searchWeather = async (city: string) => {
  try {
    const weather = await fetchWeather(city);
    renderLocation(locationElement, weather);
    renderCoordination(coordinates, weather);
    renderWeather(weatherContainer, weather);
  } catch (error) {
    handleError(weatherApp, city);
  }
};

const loadDefaultWeather = async () => {
  await searchWeather("Bogota");
};

const onSearchClick = async () => {
  const inputValue = input.value.toLowerCase();

  input.value = "";

  if (!inputValue) {
    await loadDefaultWeather();
    return;
  }

  await searchWeather(inputValue);
};

window.addEventListener("load", loadDefaultWeather);
search.addEventListener("click", onSearchClick);
