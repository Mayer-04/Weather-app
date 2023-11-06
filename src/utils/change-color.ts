import { WeatherData } from "../types/weather-data.ts";
import { day } from "./constant.ts";

const mainElement = document.querySelector(".main") as HTMLElement;
const weatherInfoContainer = document.getElementById("weather") as HTMLElement;
const searchButton = document.getElementById("search") as HTMLDivElement;
const coordinatesElement = document.getElementById(
  "coordinates"
) as HTMLElement;

const dayStyles = () => {
  mainElement.classList.add("day");
  mainElement.classList.remove("night");
  searchButton.style.backgroundColor = "#bae6fd";
  coordinatesElement.style.backgroundColor = "#bae6fd";
  coordinatesElement.style.color = "#000";
  weatherInfoContainer.style.backgroundColor = "#bae6fd";
};

const nightStyles = () => {
  const humidityIcon = document.querySelector(".humidity-icon") as HTMLElement;
  const windIcon = document.querySelector(".wind-icon") as HTMLElement;

  mainElement.classList.add("night");
  mainElement.classList.remove("day");
  searchButton.style.backgroundColor = "#4B319F";
  coordinatesElement.style.backgroundColor = "#4B319F";
  coordinatesElement.style.color = "#f0f8ff";
  humidityIcon.style.fill = "#f0f8ff";
  weatherInfoContainer.style.backgroundColor = "#4B319F";
  windIcon.style.fill = "#f0f8ff";
};

export const changeColor = (weatherData: WeatherData) => {
  if (weatherData.is_day === day) {
    dayStyles();
  } else {
    nightStyles();
  }
};
