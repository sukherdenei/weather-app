"use client";
// import { useState } from "react";
import Image from "next/image";
import Left from "./components/Left";
import Right from "./components/Right";
import Circle from "./components/Circle";
import Input from "./components/Input";
export default function Home() {
  return (
    // <div className="flex border-4 	border-white w-1200 m-auto gap-10 rounded-xl  border-red-600 p-10">
    //   <div className="bg-blue-600 p-4">
    //     <h1 className="border-2	">Hey</h1>
    //     <h3 className="text-white text-[50px] font-bold h-[500]">Naruto</h3>
    //     <img
    //       className="aspect-[4/6] w-[300px] h-[500px] "
    //       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwBVYo0oKVwH_x7l2ysXgTm2gJGeieQ8uCw&s"
    //       alt=""
    //     />
    //   </div>
    //   <div className="bg-yellow-400 p-10">
    //     <h3>Sasuke</h3>
    //     <p>lorem10</p>
    //     <img
    //       className="aspect-[4/6] w-[300px] h-[500px] "
    //       src="https://img.artpal.com/071061/2-21-4-2-3-13-57m.jpg"
    //       alt=""
    //     />
    //   </div>
    //   <div className="p-10  bg-purple-950 ">
    //     <h1>sasuki uchiha</h1>
    //     <img
    //       className="aspect-[4/6] w-[300px] h-[500px]"
    //       src="https://tamashiiweb.com/images/item/item_0000014698_CCPsWvXs_05.jpg"
    //       alt=""
    //     />
    //   </div>
    // </div>
    <div className="flex w-full h-[100vh] items-center justify-center m-auto">
      <Circle />
      <Left />
      <Right />
    </div>
  );
}
