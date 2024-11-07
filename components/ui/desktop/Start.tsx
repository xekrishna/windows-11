import { menu } from "@/public/icons";
import Image from "next/image";
import React from "react";

const Start = () => {
  return (
    <div>
      <Image src={menu} alt="start" className="h-8 w-8" />
    </div>
  );
};

export default Start;
