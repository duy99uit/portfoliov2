import { motion } from "framer-motion";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-20  flex justify-center items-center bg-black">
      <motion.div
        className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-700"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></motion.div>
    </div>
  );
};

export default LoadingScreen;
