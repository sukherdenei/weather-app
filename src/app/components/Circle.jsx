const Circle = () => {
  return (
    <div className="border-muted-foreground/20 flex items-center justify-center rounded-full z-10 border-[2px] h-[800px] w-[800px] absolute  ">
      <div className=" flex items-center justify-center rounded-full z-10 border-[2px] h-[600px] w-[600px] absolute 	border-muted-foreground/20 ">
        <div className="rounded-full z-10  h-[400px] w-[400px] 	border-2 border-muted-foreground/20 ">
          <img
            className="absolute top-[250px] left-[240px] "
            src="/left.png"
            alt=""
          />
          <img
            className="absolute top-[250px] right-[230px]"
            src="right.png"
            alt=""
          />
          {/* <img
            className="relative top-[160px] left-[250px] bg-white "
            src="/Subtract.png"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};
export default Circle;
