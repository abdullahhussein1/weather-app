export const BASE_URL = "https://api.openweathermap.org";
export const API_KEY = "9b47b5d1386949f8fab16f166ead145e";

export function getWeatherUrlByCityName(cityName) {
  return (
    BASE_URL + `/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
  );
}
