"use client";
// import { useState } from "react";
import Image from "next/image";
import Left from "./components/Left";
import Right from "./components/Right";
import Circle from "./components/Circle";
import Input from "./components/Input";
import { useEffect, useState } from "react";
export default function Home() {
  const [cities, setCity] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedcity, setSelectedcity] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState("-12");
  const [night, setNight] = useState("");
  const [daynight, setDaynight] = useState("");
  // const [pic, setPic] = useState("");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");

    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCity(incomeCities);
  }

  // getData();

  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
  };

  async function getWeatherData(city) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=3977689b1fa041c783f21503250801&q=${city}`
    );
    const data = await result.json();
    // console.log(data.current.temp_c);
    setWeather(data.forecast.forecastday[0].day.maxtemp_c);
    // setPic();
    console.log(data);
    setSelectedcity(city);
    setNight(data.forecast.forecastday[0].hour[0].temp_c);
    setDaynight(data.forecast.forecastday[0].day.condition.text);
    // setPic(data.forecast.forecastday[0].day.condition.icon);
  }
  useEffect(() => {
    getData();
    getWeatherData(selectedcity);
  }, []);

  const searchHandleClick = (city) => {
    setSelectedcity(city);
    setSearched([]);
    getWeatherData(city);
    // setNight(city);
  };
  // const changePic = () => {
  //   if (pic === "Sunny") {
  //     return(i);
  //   }
  //   if (pic === "Partly Cloudy") {
  //     retunr("Sun");
  //   }
  // };
  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      <Circle />
      <Left
        // pic={pic}
        searchHandler={searchHandler}
        searched={searched}
        weather={weather}
        selectedcity={selectedcity}
        searchHandleClick={searchHandleClick}
        // changePic={changePic}
        daynight={daynight}
      />
      <Right
        selectedcity={selectedcity}
        weather={weather}
        night={night}
        setNight={setNight}
        daynight={daynight}
      />
    </div>
  );
}
