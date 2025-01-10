import Weather from "../Weather";
// import Celsius from "./Celsius";
const Right = ({ selectedcity, night, daynight, nightright }) => {
  const weatherIconRight = () => {
    const condition = nightright.toLowerCase();
    // console.log(condition);
    switch (true) {
      case condition.includes("mist"):
        return <img src="/nightwind.png" alt="" />;

      case condition.includes("thunder"):
        return <img src="/nighthunder.png" alt="" />;

      case condition.includes("train"):
        return <img src="/nighttrain.png" alt="" />;

      case condition.includes("cloud"):
        return <img src="/nightclouds.png" alt="" />;

      case condition.includes("wind"):
        return <img src="/Day.Wind.png" alt="" />;

      case condition.includes("snow"):
        return <img src="/nightsnow.png" alt="" />;

      case condition.includes("clear"):
        return <img src="/nightsun.png" alt="" />;
      case condition.includes("freezing"):
        return <img src="Day.Wind.png" alt="" />;
    }
  };
  // console.log(weatherIconRight(daynight));
  return (
    <div className=" bg-[#0F141E] w-1/2 h-full relative flex items-center justify-center pt-5 pl-20 rounded-xl">
      <div className="  bg-[rgba(17,24,39)] h-[832px] w-[414px] border-2 border-[#111827BF] rounded-[30px]">
        <p className="text-xl	text-gray-400 pl-5	mt-5">January 6, 2025</p>
        <h1 className="text-4xl	text-white	 pl-5 flex">
          {selectedcity}
          <img
            src="/localization_icon.png"
            alt=""
            className="w-[32px] h-[32px] ml-32"
          />
        </h1>
        <div className="w-[410px] h-[410px]">
          {weatherIconRight(nightright)}
        </div>

        {/* <img src="/Clouds.png" alt="" /> */}
        <h1 className="w-[209px] h-[203px] m-auto text-7xl text-gray-400 font-extrabold	">
          {night}°C
          <p className=" text-[#777CCE] text-[24px] font-extrabold	 w-[74px] h-[33px] mt-5">
            {nightright}
          </p>
        </h1>
        <div className="footer flex justify-center gap-6  ">
          <img src="/Home.png" alt="" className="cursor-pointer" />
          <img src="/localization_icon.png" alt="" className="cursor-pointer" />
          <img src="/Heart.png" alt="" className="cursor-pointer" />
          <img src="/User.png" alt="" className="cursor-pointer" />
        </div>
      </div>
      <img
        src="/Ellipse 22.png"
        alt=""
        className="relative top-[40%] right-[5%] blur-sm"
      />
      {/* <Weather /> */}
      {/* <Celsius weather={Weather} /> */}
    </div>
  );
};
export default Right;
