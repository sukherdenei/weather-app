const Celsius = ({ weather, daynight }) => {
  return (
    <div className="w-[209px] h-[203px] flex flex-col m-auto text-7xl text-black font-extrabold">
      <h1 className="  w-[209px] h-[203px] m-auto text-7xl text-gray-800 font-extrabold">
        {weather}°c
      </h1>
      <p className="text-orange-400 text-[24px] font-extrabold w-[74px] h-[33px] -pt-20">
        {daynight}
      </p>
    </div>
  );
};
export default Celsius;
