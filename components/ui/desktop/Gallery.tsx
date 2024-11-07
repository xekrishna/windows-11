import { gallery } from "@/public/icons";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <Image src={gallery} alt="gallery" className="h-8 w-8 p-[0.1rem]" />
    </div>
  );
};

export default Gallery;
