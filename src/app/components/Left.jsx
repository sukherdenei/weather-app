import Weather from "../Weather";
import Celsius from "./Celsius";
import Footer from "./Footer";
import Input from "./Input";
const Left = ({
  searchHandler,
  searched,
  selectedcity,
  searchHandleClick,
  weather,
  night,
  daynight,
  pic,
}) => {
  // const date = d.getFullYear();
  // const date = new Date();
  const date = "2025-01-09 12:12 pm";

  return (
    <div className="bg-[#D1D5DB] w-1/2 h-full rounded-xl relative pt-5 pl-20 ">
      {/* <img
        src="/Ellipse 21.png"
        alt=""
        className="w-[176px] h-[176px] relative top-[40px] -right-[50px] blur-sm"
      /> */}
      <Input
        searchHandler={searchHandler}
        searched={searched}
        searchHandleClick={searchHandleClick}
      />
      <div className="flex justify-center ">
        <div className="bg-[#F3F4F6] h-[832px] w-[414px] border-2 border-[#D1D5DB] rounded-[30px] ">
          <p className="text-xl text-gray-400  pl-5 mt-5  ">{date}</p>
          <h1 className="text-4xl text-black  pl-5 flex ">
            {selectedcity}
            <img
              src="/localization_icon.png"
              alt=""
              className="w-[32px] h-[32px] ml-32"
            />
          </h1>
          <Weather />
          <Celsius weather={weather} night={night} daynight={daynight} />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Left;
