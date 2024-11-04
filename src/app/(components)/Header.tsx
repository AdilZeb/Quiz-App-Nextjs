import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center m-0 ">
        <Image
          src={"/favicon.ico"}
          alt={"Vercel Logo"}
          width={50}
          height={50}
        ></Image>
        <h1 className="text-3xl">React Quiz App</h1>
      </div>
    </div>
  );
};

export default Header;
