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
          <svg class="wind-icon" width="40" height="40" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M184 184a32 32 0 0 1-32 32c-13.7 0-26.95-8.93-31.5-21.22a8 8 0 0 1 15-5.56C137.74 195.27 145 200 152 200a16 16 0 0 0 0-32H40a8 8 0 0 1 0-16h112a32 32 0 0 1 32 32Zm-64-80a32 32 0 0 0 0-64c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C105.74 60.73 113 56 120 56a16 16 0 0 1 0 32H24a8 8 0 0 0 0 16Zm88-32c-13.7 0-26.95 8.93-31.5 21.22a8 8 0 0 0 15 5.56C193.74 92.73 201 88 208 88a16 16 0 0 1 0 32H32a8 8 0 0 0 0 16h176a32 32 0 0 0 0-64Z"/>
          </svg>
            <div class="wind-info">
              <p class="wind-speed">Viento</p>
              <strong class="wind-km">${weather.wind_kph} km/h</strong>
            </div>
        </div>
`;
};
