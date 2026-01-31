"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat border-b h-[500px] md:h-screen"
      style={{ backgroundImage: "url('/bcg.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-white bg-clip-text text-transparent">
            All About Calisthenics
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl max-w-3xl text-white/90"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="bg-white font-semibold bg-clip-text text-transparent">
            Your ultimate resource for everything related to calisthenics. Learn
            techniques, find workout plans, and stay motivated.
          </span>
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* <Link
            href="/gyms"
            className="inline-block bg-white text-black font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Explore Gyms
          </Link> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
