import { motion } from "framer-motion";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-20  flex justify-center items-center">
      {/* <p className="text-gray-300 text-base">Loading</p> */}
      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};

export default LoadingScreen;
