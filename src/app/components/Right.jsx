import Weather from "../Weather";
// import Celsius from "./Celsius";
const Right = ({ selectedcity, weather }) => {
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

        <img src="/moon.png" alt="" className="m-auto mt-10" />
        <h1 className="w-[209px] h-[203px] m-auto text-7xl text-gray-400 font-extrabold	">
          {weather}
          <p className=" text-[#777CCE] text-[24px] font-extrabold	 w-[74px] h-[33px] mt-5">
            Clear
          </p>
        </h1>
        <div className="footer flex justify-center gap-6 cursor-pointer hover:bg-blue-950  ">
          <img src="/Home.png" alt="" />
          <img src="/localization_icon.png" alt="" />
          <img src="/Heart.png" alt="" />
          <img src="/User.png" alt="" />
        </div>
      </div>
      <img
        src="/Ellipse 22.png"
        alt=""
        className="relative top-[390px] right-[50px] blur-sm"
      />
      {/* <Weather /> */}
      {/* <Celsius weather={Weather} /> */}
    </div>
  );
};
export default Right;
