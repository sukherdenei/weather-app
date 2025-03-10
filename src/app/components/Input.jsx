function Input({ searchHandler, searched, searchHandleClick }) {
  return (
    <div className="relative  text-black columns-auto w-[567px] h-[80px]  justify-end">
      <div className="flex">
        <svg
          className="-mr-20 mt-5 relative "
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <path
              d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z"
              fill="black"
            />
          </g>
        </svg>

        <input
          type="text"
          placeholder="Хайх хотоо оруулна уу"
          className="border-2 border-silver rounded-[48px] w-[567px] h-[80px] outline-none pl-20 "
          onChange={searchHandler}
        />
      </div>
      <div className="border-blue-500  bg-white absolute flex flex-col gap-3 rounded-2xl ">
        {searched.length > 0 &&
          searched.slice(0, 10).map((city, index) => (
            <p
              className="cursor-pointer text-3xl hover:bg-orange-100 border-1 w-[519px] border-2"
              key={index}
              onClick={() => searchHandleClick(city)}
            >
              {city}
            </p>
          ))}
      </div>
    </div>
  );
}
export default Input;
