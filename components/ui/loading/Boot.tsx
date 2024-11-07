import { windowsLogo } from "@/public/images";
import Image from "next/image";
import React from "react";
import Loader from "./Loader";

const Boot = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 gap-10 ">
      <Image src={windowsLogo} alt="windows" className="h-44 w-44" />
      <Loader />
    </div>
  );
};

export default Boot;
