"use client";

import Start from "./Start";
import Search from "./Search";
import useCurrentTime from "@/hooks/useDate";
import { BsBatteryCharging, BsBellFill } from "react-icons/bs";
import { GiSpeaker } from "react-icons/gi";
import { BiWifi } from "react-icons/bi";
import File from "./File";
import Edge from "./Edge";
import Gallery from "./Gallery";
import Mail from "./Mail";
import Github from "./Github";
import Instagram from "./Instagram";

const Navbar = () => {
  const time = useCurrentTime();

  return (
    <div className="w-full h-[3.75rem]  gap-1 z-50 grid grid-cols-10 p-1 ">
      <div className="col-span-2"></div>
      <div className="col-span-6  flex items-center justify-center">
        <div className="w-max h-12 bg-black/30 rounded-lg flex justify-center items-center  p-1 backdrop-blur-sm gap-1">
          {/**Start */}
          <div>
            <Start />
          </div>
          {/**Search */}
          <div className="p-1 hover:bg-white/20 rounded-md">
            <Search />
          </div>
          {/**Divider*/}
          <div className="h-[60%] w-[1px] bg-white/30 mx-1" />
          {/**File */}
          <div className="p-1 hover:bg-white/20 rounded-md">
            <File />
          </div>
          {/**Edge */}
          <div className="p-1 hover:bg-white/20 rounded-md">
            <Edge />
          </div>
          {/**Gallery */}
          <div className="p-1 hover:bg-white/20 rounded-md">
            <Gallery />
          </div>
          {/**Mail */}
          <div className="p-1 hover:bg-white/20 rounded-md">
            <Mail />
          </div>
          {/**Divider*/}
          <div className="h-[60%] w-[1px] bg-white/30 mx-1" />
          {/**Github */}
          <div className="p-1 hover:bg-white/20 rounded-md">
            <Github />
          </div>
          {/**Instagram */}
          <div className="p-1 hover:bg-white/20 rounded-md">
            <Instagram />
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-2 col-span-2 px-2 ">
        <div className="flex items-center justify-center  backdrop-blur-sm bg-black/30 gap-4 h-full p-3 rounded-lg">
          <div className="flex justify-center items-center">
            <BiWifi />
          </div>
          <div className="text-xl">
            <GiSpeaker />
          </div>
          <div>
            <BsBatteryCharging />
          </div>
        </div>

        <div className="text-xs  backdrop-blur-sm bg-black/30 h-full p-2 rounded-lg flex items-center justify-center gap-2">
          {time.toLocaleTimeString([], { timeStyle: "short" })} <br />
          {time.toLocaleDateString([], { month: "long", day: "numeric" })}
          <div className="rounded-full border h-5 w-5 flex justify-center items-center">
            <span className="font-semibold text-[0.6rem] ">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
