import { User } from "@/lib/data";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BsArrowLeft,
  BsArrowRepeat,
  BsMoon,
  BsPower,
  BsWifi,
} from "react-icons/bs";

const LoginPage = ({ onClose }) => {
  const iconProps = "text-xl hover:bg-black/20 transition-all p-2 rounded-full";
  const [password, setPassword] = useState("");
  const [pinError, setPinError] = useState(false);
  const [isPowerOpen, setIsPowerOpen] = useState(false);
  const router = useRouter();

  const itemVariants: Variants = {
    open: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  const handleChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    if (enteredPassword.length === 4) {
      if (enteredPassword === User.password) {
        router.push("/home");
      } else {
        setPinError(true);
        setPassword(""); // Clear the input field on wrong input
      }
    } else {
      setPinError(false);
    }
  };

  const shakeAnimation = {
    initial: { x: 0 },
    animate: { x: [0, -10, 10, -10, 10, 0] }, // Define a shaking pattern
    transition: { duration: 0.4 }, // Adjust duration for desired shake effect
  };

  return (
    <div>
      {/* Back Button */}
      <div className="absolute left-10 top-[45%] translate-y-[-50%] hover:bg-black/20 p-2 rounded-full transition-all">
        <BsArrowLeft className="text-4xl" onClick={onClose} />
      </div>

      {/* Main */}
      <div className="flex flex-col items-center justify-center gap-3">
        <Image
          src={User.avatar}
          alt="user"
          className="h-52 w-52 rounded-full border-4 border-white/80"
        />
        <span className="text-4xl font-medium">{User.name}</span>
      </div>

      {/* Password Input */}
      <div className="rounded-md  mt-5 flex flex-col justify-center items-center gap-5">
        <motion.input
          type="password"
          className={`bg-black/30 w-64 px-2 py-1 rounded-t-md border-b-4 border-white focus:border-purple-600 outline-none ${
            pinError && "border-red-600 focus:border-red-600"
          }`}
          placeholder="PIN"
          value={password}
          onChange={handleChange}
          {...(pinError ? shakeAnimation : {})} // Apply shake animation on error
        />
        <span onClick={() => alert("Passowrd is 1234")}>I forgot my PIN</span>
      </div>

      {/* Bottom Menu */}
      <div className="absolute bottom-5 right-10 flex gap-5 justify-center items-center">
        <span className="text-sm text-center">
          ENG <br />
          US
        </span>
        <div className={iconProps}>
          <BsWifi />
        </div>

        {/* Power Menu */}
        <motion.div initial={false} animate={isPowerOpen ? "open" : "closed"}>
          <motion.ul
            className="absolute -top-24 bg-black/30 py-2 px-2 right-2"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(100% 0% 0% 100% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isPowerOpen ? "auto" : "none" }}
          >
            <motion.li variants={itemVariants}>
              <BsMoon />
              <span>Sleep</span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <BsPower />
              <span>Shut Down</span>
            </motion.li>
            <motion.li variants={itemVariants}>
              <BsArrowRepeat />
              <span>Restart</span>
            </motion.li>
          </motion.ul>
          <motion.button
            className={iconProps}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsPowerOpen(!isPowerOpen)}
          >
            <BsPower />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
