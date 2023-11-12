import { GiWindsock } from "react-icons/gi";
import { FiWind } from "react-icons/fi";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";

const WeatherBox = ({ data, src }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-800/60 text-white shadow-xl gap-6 rounded-3xl p-4 h-fit w-80 transition-all">
      <h4 className="text-2xl font-medium -mb-5">{data.name}</h4>
      <div className="flex flex-col items-center justify-center">
        <img src={src} className="w-fit h-fit" alt="image" />
        <p className="text-5xl font-medium -mt-4 mb-1">{data.main.temp}</p>
        <p>{data.weather[0].description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <FiWind />

          <div className="text-slate-200">
            <p className="text-slate-500">wind speed</p>
            {data.wind.speed}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <GiWindsock />

          <div className="text-slate-200">
            <p className="text-slate-500 whitespace-nowrap">wind direction</p>
            {data.wind.deg}°
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TiWeatherWindyCloudy />
          <div className="text-slate-200">
            <p className="text-slate-500">pressure</p>
            {data.main.pressure}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <WiHumidity />
          <div className="text-slate-200">
            <p className="text-slate-500">humidity</p>
            {data.main.humidity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
