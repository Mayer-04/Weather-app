import { RenderedWeather } from "../types/rendered-weather.ts";

export const renderLocation = (
  location: HTMLElement,
  weather: RenderedWeather
) => {
  location.innerHTML = `
        <h2 class="city-name">${weather.name}</h2>
        <p class="country">${weather.country}</p>
        <p class="temperature">${weather.temp_c}°</p>
    `;
};
