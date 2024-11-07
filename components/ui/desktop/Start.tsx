"use client";

import { menu } from "@/public/icons";
import Image from "next/image";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { User } from "@/lib/data";
import { BsGear, BsPower } from "react-icons/bs";
import { BiExpandAlt } from "react-icons/bi";

const Start = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  // Toggle the menu's visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsExpanded(false);
  };

  // Toggle menu expansion
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`p-1 hover:bg-white/20 rounded-md ${isOpen && "bg-white/20"}`}
    >
      {/* Image button */}
      <Image
        src={menu}
        alt="start"
        className="h-8 w-8 cursor-pointer"
        onClick={toggleMenu}
      />

      {/* Animated Menu */}
      <motion.div
        initial={false}
        animate={{
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 10px)"
            : "inset(100% 100% 0% 0% round 10px)",
          width: !isExpanded ? "22.5vw" : "40vw",
        }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: isOpen ? 0.7 : 0.3,
        }}
        className="absolute bottom-14 left-[50%] -translate-x-1/2 h-[60vh] bg-black/40 backdrop-blur-lg z-[50] shadow-lg rounded-lg grid gap-2 grid-cols-12 grid-rows-13"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.div
          variants={itemVariants}
          className={`${
            isExpanded ? "col-span-8" : "col-span-12"
          } row-span-6 bg-black/60 pt-2 pl-2`}
        >
          Pinned
        </motion.div>
        {isExpanded && (
          <motion.div
            variants={itemVariants}
            className="col-span-4 row-span-11 bg-black/60 pt-2 pr-2 pl-2"
          >
            All Apps
          </motion.div>
        )}
        <motion.div
          variants={itemVariants}
          className={` row-span-5 bg-black/60 pt-2 pl-2 ${
            isExpanded ? "col-span-8" : "col-span-12"
          } transition-all `}
        >
          Recent
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="col-span-12 row-span-1 bg-black/60 px-3 flex justify-between items-center"
        >
          <div className="flex gap-2 justify-center items-center">
            <Image src={User.avatar} alt="" className="h-8 w-8 rounded-full" />
            <span className="">{User.name}</span>
          </div>
          <div className="flex gap-2">
            <div>
              <BsGear />
            </div>
            <div>
              <BsPower />
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}
            >
              <BiExpandAlt />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Start;
