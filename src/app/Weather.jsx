import React from "react";

const Weather = ({ pic, daynight }) => {
  const weatherIconLeft = () => {
    const condition = daynight.toLowerCase();
    // console.log(condition);
    switch (true) {
      case condition.includes("mist"):
        // console.log("sun");
        return <img src="/Clouds.png" alt="" />;

      case condition.includes("snow"):
        return <img src="/snow.png" alt="" />;

      case condition.includes("rain"):
        return <img src="/Rain.png" alt="" />;

      case condition.includes("mist"):
        return <img src="/Day.Wind.png" alt="" />;

      case condition.includes("wind"):
        return <img src="/Day.Wind.png" alt="" />;

      case condition.includes("cloudy"):
        return <img src="/Clouds.png" alt="" />;

      case condition.includes("sunny"):
        return <img src="Sun.png" alt="" />;
      case condition.includes("freezing"):
        return <img src="/Clouds.png" alt="" />;
    }
  };
  return (
    <main>
      <div className="flex  justify-center 	items-center ">
        {/* pic === "Partly Cloudy" && <img src="./Clouds.png" alt="" /> */}
        <div className="w-[410px] h-[410px]">{weatherIconLeft(daynight)}</div>

        {/* <img className="w-[274px] h-[274px] mt-10" src="/iconsun.png" alt="" /> */}
      </div>
    </main>
  );
};
export default Weather;
