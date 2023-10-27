export const handleError = (
  weatherApp: HTMLDivElement,
  errorContainer: HTMLElement,
  city: string
) => {
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
