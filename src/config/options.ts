export const options = Object.freeze({
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
});
