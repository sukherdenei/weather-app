// "use client";
const Circle = () => {
  return (
    <div className=" flex items-center justify-center rounded-full z-10 border-[1px] h-[600px] w-[600px] absolute		">
      <div className="rounded-full z-10 border-[1px] h-[400px] w-[400px] 	">
        <svg
          className="absolute top-[250px] left-[240px]"
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="86"
          viewBox="0 0 43 86"
          fill="none"
        >
          <path
            d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z"
            fill="#111111"
          />
        </svg>
      </div>
    </div>
  );
};
export default Circle;
