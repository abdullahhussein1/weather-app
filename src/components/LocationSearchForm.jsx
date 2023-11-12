/* eslint-disable react/prop-types */
import { GoSearch } from "react-icons/go";

const LocationSearchForm = ({
  cityName,
  setCityName,
  getWeatherByCityName,
}) => {
  return (
    <form className="flex flex-col justify-center items-center bg-slate-800/60 shadow-lg gap-3 rounded-3xl p-4 h-fit w-80 transition-all">
      <div className="relative flex items-center justify-center w-full">
        <input
          type="text"
          className="bg-slate-700/60  text-white font-light placeholder:text-slate-500 rounded-xl px-2 py-1 w-full outline-none shadow-sm"
          placeholder="Search"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <GoSearch className="absolute right-3 text-slate-500" />
      </div>
      <button
        className="bg-blue-500 text-white w-full  rounded-xl  px-2 py-1"
        onClick={async (e) => {
          e.preventDefault();
          (await getWeatherByCityName(cityName)) && setCityName("");
        }}
      >
        Search
      </button>
    </form>
  );
};

export default LocationSearchForm;
