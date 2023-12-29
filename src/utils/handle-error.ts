interface Options {
  weatherApp: HTMLDivElement;
  errorContainer: HTMLElement;
  city: string;
}

export const handleError = (options: Options) => {
  const { weatherApp, errorContainer, city } = options;

  weatherApp.classList.add("hidden");

  errorContainer.innerHTML = `
      <figure class="container-error">
        <img class="error-image" src="/is-fine.gif" alt="Error-404"/>
      </figure>
        <div class="message-error">
          <p class="text-error">
            La ciudad <span class="city">${city}</span> no se encontro. Por favor, ingresa un nombre válido.
          </p>
        </div>
    `;
};
