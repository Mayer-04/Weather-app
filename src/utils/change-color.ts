import { WeatherData } from "../types/weather-data.ts";
import { isDay, themeColors } from "./constant.ts";
import {
  mainElement,
  weatherInfoContainer,
  searchButton,
  coordinatesElement,
} from "./dom-elements.ts";

const dayStyles = () => {
  const { backgroundColor, textColor } = themeColors.day;

  mainElement.classList.add("day");
  mainElement.classList.remove("night");
  searchButton.style.backgroundColor = backgroundColor;
  coordinatesElement.style.backgroundColor = backgroundColor;
  coordinatesElement.style.color = textColor;
  weatherInfoContainer.style.backgroundColor = backgroundColor;
};

const nightStyles = () => {
  const humidityIcon = document.querySelector(".humidity-icon") as HTMLElement;
  const windIcon = document.querySelector(".wind-icon") as HTMLElement;

  const { backgroundColor, textColor } = themeColors.night;

  mainElement.classList.add("night");
  mainElement.classList.remove("day");
  searchButton.style.backgroundColor = backgroundColor;
  coordinatesElement.style.backgroundColor = backgroundColor;
  coordinatesElement.style.color = textColor;
  humidityIcon.style.fill = textColor;
  weatherInfoContainer.style.backgroundColor = backgroundColor;
  windIcon.style.fill = textColor;
};

export const changeColor = (weatherData: WeatherData) => {
  weatherData.is_day === isDay ? dayStyles() : nightStyles();
};
