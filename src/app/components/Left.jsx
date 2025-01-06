import Weather from "../Weather";
import Celsius from "./Celsius";
import Footer from "./Footer";
const Left = () => {
  const city = "Ulaanbaatar";
  const date = "January6, 2025";
  return (
    <div className="  bg-[#FFFFFF] w-[567px] h-[828px] rounded-xl relative pt-5 pl-20">
      <div>
        <p className="text-xl text-gray-400">{date}</p>
        <h1 className="text-6xl text-black">{city}</h1>
      </div>
      <div
        className="flex justify-center items-center my-20 ;
"
      >
        <Weather />
      </div>
      <Celsius />
      <Footer />
    </div>
  );
};
export default Left;
