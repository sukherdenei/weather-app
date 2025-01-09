import React from "react";

const Weather = ({ pic }) => {
  return (
    <main>
      <div className="flex  justify-center 	items-center ">
        {/* pic === "Partly Cloudy" && <img src="./Clouds.png" alt="" /> */}
        <img className="w-[274px] h-[274px] mt-10" src="/iconsun.png" alt="" />
      </div>
    </main>
  );
};
export default Weather;
