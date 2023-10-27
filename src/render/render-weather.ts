import { RenderedWeather } from "../types/rendered-weather.ts";

export const renderWeather = (
  weatherContainer: HTMLElement,
  weather: RenderedWeather
) => {
  weatherContainer.innerHTML = `
        <div class="weather-condition">
            <img
              class="weather-icon"
              src="${weather.icon}"
              alt="${weather.text}"
            />
            <p class="weather-description">${weather.text}</p>
        </div>

        <div class="wind">
            <img class="wind-icon" src="/icons/wind.svg" alt="Icono viento" />
            <div class="wind-info">
              <p class="wind-speed">Viento</p>
              <strong class="wind-km">${weather.wind_kph} km/h</strong>
            </div>
        </div>
`;
};
