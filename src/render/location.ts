import { WeatherData } from "../types/weather-data.ts";

export const renderLocation = (location: HTMLElement, weather: WeatherData) => {
  location.innerHTML = `
        <h2 class="city-name">${weather.cityName}</h2>
        <p class="country">${weather.country}</p>
        <p class="temperature">${weather.temp_c}°</p>
    `;
};
