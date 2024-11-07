"use client";

import Image from "next/image";
import { lockWallpaper } from "@/public/images";
import { useEffect, useState } from "react";

const Lock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <Image
          src={lockWallpaper}
          alt="wallpaper"
          className="w-full h-full absolute -z-50"
        />
      </div>
      <div className="w-full h-full flex items-center flex-col pt-20">
        <div className="text-8xl">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </div>
        <div>
          {time.toLocaleDateString([], {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    </>
  );
};

export default Lock;
