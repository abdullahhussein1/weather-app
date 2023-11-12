import { GiWindsock } from "react-icons/gi";

const WeatherBox = ({ data, src }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-800/60 text-white shadow-xl gap-3 rounded-3xl p-4 h-fit w-80 transition-all">
      {data && (
        <>
          <h4 className="text-2xl font-medium">{data.name}</h4>
          <div className="flex flex-col items-center justify-center">
            <img src={src} className="w-fit h-fit" alt="image" />
            <p className="text-5xl font-medium">{data.main.temp}</p>
            <p>{data.weather[0].description}</p>
          </div>
          <div className="grid grid-cols-2 w-4/5  gap-4">
            <div className="flex items-center gap-2">
              <GiWindsock />
              <div className="text-slate-200">
                <p className="text-slate-500">wind</p>
                {data.wind.speed}
              </div>
            </div>
            <div className="text-slate-200">
              <p className="text-slate-500">deg</p>
              {data.wind.deg}
            </div>
            <div className="text-slate-200">
              <p className="text-slate-500">main</p>
              {data.weather[0].main}
            </div>
            <div className="text-slate-200">
              <p className="text-slate-500">humidity</p>
              {data.main.humidity}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherBox;
