import "./style.css";

import { fetchWeather } from "./weather-data.ts";
import { renderLocation } from "./render/render-location.ts";
import { renderCoordination } from "./render/render-coordinates.ts";
import { renderWeather } from "./render/render-weather.ts";

const input = document.querySelector(".search-input") as HTMLInputElement;
const search = document.getElementById("search") as HTMLDivElement;
const location = document.getElementById("location") as HTMLElement;
const coordinates = document.getElementById("coordinates") as HTMLElement;
const weatherContainer = document.getElementById("weather") as HTMLElement;

const loadDefaultWeather = async () => {
  try {
    const defaultWeather = await fetchWeather();
    renderLocation(location, defaultWeather);
    renderCoordination(coordinates, defaultWeather);
    renderWeather(weatherContainer, defaultWeather);
  } catch (error) {
    console.error(error);
  }
};

const weatherApp = async () => {
  const inputValue = input.value.toLowerCase();

  if (!inputValue) {
    console.log(`El ${inputValue} no existe`);
    return;
  }

  try {
    const weather = await fetchWeather(inputValue);

    renderLocation(location, weather);
    renderCoordination(coordinates, weather);
    renderWeather(weatherContainer, weather);
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener("load", loadDefaultWeather);
search.addEventListener("click", weatherApp);
