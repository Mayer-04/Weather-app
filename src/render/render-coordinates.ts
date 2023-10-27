import { RenderedWeather } from "../types/rendered-weather.ts";

export const renderCoordinatesElement = (
  coordinates: HTMLElement,
  weather: RenderedWeather
) => {
  coordinates.innerHTML = `
    <div class="humidity-container">
            <div class="humidity-content">
              <p class="humidity">${weather.humidity}</p>
              <img
                class="humidity-icon"
                src="/icons/humidity.svg"
                alt="Icono Humedad"
              />
            </div>
            <strong>Humedad</strong>
          </div>

          <div class="latitude-container">
            <p class="latitude">${weather.lat}°</p>
            <strong>Latitud</strong>
          </div>
    `;
};
