export const BASE_URL =
  process.env.REACT_APP_ENV === "production"
    ? "https://www.titleone.co.uk"
    : `http://localhost:${process.env.PORT ? process.env.PORT : 3000}/`;
