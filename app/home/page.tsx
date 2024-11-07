import Navbar from "@/components/ui/desktop/Navbar";
import Desktop from "@/components/ui/desktop/Desktop";
import React from "react";
import Image from "next/image";
import { wallpaper } from "@/public/images";

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-full h-[100vh]">
      <div>
        <Image src={wallpaper} alt="wallpaper" className="h-full absolute" />
      </div>
      <Desktop />
      <Navbar />
    </div>
  );
};

export default Home;
