"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { lockWallpaper, wallpaper } from "@/public/images";
import LoginPage from "./LoginPage";
import useCurrentTime from "@/hooks/useDate";

const Lock = () => {
  const [showLogin, setShowLogin] = useState(false);

  const time = useCurrentTime();

  // Function to open the login component
  const openLogin = () => setShowLogin(true);

  // Function to close the login component
  const closeLogin = () => setShowLogin(false);

  return (
    <>
      <div onClick={openLogin}>
        <Image
          src={wallpaper}
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

      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
          >
            <LoginPage onClose={closeLogin} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Lock;
