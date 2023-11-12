import { useEffect, useState } from "react";
import axios from "axios";
import LocationSearchForm from "./LocationSearchForm";
import WeatherBox from "./WeatherBox";
import { getWeatherUrlByCityName } from "../utilities/api/weatherApi";

function WeatherApp() {
  const [data, setData] = useState();
  const [cityName, setCityName] = useState("");
  const [src, setSrc] = useState();

  async function getWeatherByCityName(cityName) {
    const response = await axios.get(getWeatherUrlByCityName(cityName));
    const data = await response.data;
    console.log(data);
    setData(data);

    setSrc(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    return data;
  }

  useEffect(() => {
    getWeatherByCityName("erbil");
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-4 justify-center items-center">
      <LocationSearchForm
        cityName={cityName}
        setCityName={setCityName}
        getWeatherByCityName={getWeatherByCityName}
      />
      <WeatherBox data={data} src={src} />
    </div>
  );
}

export default WeatherApp;
