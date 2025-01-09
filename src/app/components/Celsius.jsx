const Celsius = ({ weather, daynight }) => {
  return (
    <div className="w-[209px] h-[203px] m-auto text-7xl text-black font-extrabold">
      <h1 className="  font-extrabold">{weather}</h1>
      <p className="text-[24px] font-extrabold	 w-[74px] h-[33px] text-[#FF8E27]  mt-5">
        {daynight}
      </p>
    </div>
  );
};
export default Celsius;
