import { github } from "@/public/icons";
import Image from "next/image";
import React, { useState } from "react";
import Browser from "@/components/common/Browser"; // Import your Browser component

const Github = () => {
  const [showBrowser, setShowBrowser] = useState(false);

  const handleClick = () => {
    setShowBrowser(!showBrowser); // Toggle the browser visibility
  };

  return (
    <div>
      {/* GitHub icon */}
      <div onClick={handleClick} className="cursor-pointer">
        <Image src={github} alt="GitHub logo" className="h-8 w-8 p-[0.0rem]" />
      </div>

      {/* Conditionally render Browser component */}
      {showBrowser && (
        <div className="absolute bottom-20 left-0 w-[60vw] h-[50vh] z-10">
          <Browser url="https://xekrishna.vercel.app" />
        </div>
      )}
    </div>
  );
};

export default Github;
