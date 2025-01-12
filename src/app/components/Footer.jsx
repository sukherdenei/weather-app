const Footer = () => {
  return (
    <div className="flex w-[318px] h-[32px] justify-center gap-10	absolute items-center mt-5  ">
      <div className="footer flex justify-center gap-6  ">
        <img
          src="/Home.png"
          alt=""
          className="cursor-pointer  hover:bg-white"
        />
        <img src="/localization_icon.png" alt="" className="cursor-pointer" />
        <img src="/Heart.png" alt="" className="cursor-pointer" />
        <img src="/User.png" alt="" className="cursor-pointer  " />
      </div>
    </div>
  );
};
export default Footer;
