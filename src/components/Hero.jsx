"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-white border-b h-[500px] md:h-screen"
      style={{ backgroundImage: "url('/bcg.png')" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center">
        <motion.div
          className="md:text-8xl font-bold text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-white bg-clip-text text-transparent">
            All About Calisthenics
          </span>
        </motion.div>
        <motion.div
          className="mt-4 text-xl md:text-5xl mx-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-white font-bold bg-clip-text text-transparent">
            Your ultimate resource for everything related to calisthenics. Learn
            techniques, find workout plans, and stay motivated.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
