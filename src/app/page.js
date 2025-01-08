"use client";
// import { useState } from "react";
import Image from "next/image";
import Left from "./components/Left";
import Right from "./components/Right";
import Circle from "./components/Circle";
import Input from "./components/Input";
import { useState } from "react";
export default function Home() {
  const [cities, setCity] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedcity, setSelectedciti] = useState("");
  const [weather, setWeather] = useState("Ulaanbaatar");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");

    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCity(incomeCities);
  }
  getData();

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
    console.log(data.current.temp_c);
    setWeather(data.current.temp_c);
    // setWeather(data);
  }
  const searchHandleClick = (city) => {
    setSelectedciti(city);
    setSearched([]);
    getWeatherData(city);
  };

  return (
    <div className="flex w-full h-[100vh] items-center justify-center m-auto">
      <Circle />
      <Left
        searchHandler={searchHandler}
        searched={searched}
        weather={weather}
        selectedcity={selectedcity}
        searchHandleClick={searchHandleClick}
      />
      <Right />
    </div>
  );
}
