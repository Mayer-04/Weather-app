import { WeatherData } from "../types/weather-data.ts";

export const renderWeatherInfo = (
  weatherContainer: HTMLElement,
  weather: WeatherData
) => {
  weatherContainer.innerHTML = `
        <div class="weather-condition">
            <img
              class="weather-icon"
              src="${weather.icon}"
              alt="${weather.weatherStatus}"
            />
            <p class="weather-description">${weather.weatherStatus}</p>
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
