import Weather from "../Weather";
import Celsius from "./Celsius";
import Footer from "./Footer";
import Input from "./Input";
const Left = () => {
  const city = "Ulaanbaatar";
  const date = "January6, 2025";
  return (
    <div className="  bg-[#D1D5DB] w-1/2 h-full rounded-xl relative pt-5 pl-20 ">
      <Input />
      <div className="flex justify-center ">
        <div className="bg-[#F3F4F6] h-[828px] w-[414px] border-2 border-[#D1D5DB] rounded-[30px]">
          <p className="text-xl text-gray-400  pl-5">{date}</p>
          <h1 className="text-4xl text-black  pl-5">{city}</h1>
          <Weather />
          <Celsius />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Left;
