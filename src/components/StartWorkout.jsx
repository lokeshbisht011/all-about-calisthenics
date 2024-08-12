"use client";

import React from "react";
import { motion } from "framer-motion";
import WorkoutTemplates from "./WorkoutTemplates";

const StartWorkout = ({ setIsWorkoutStarted }) => {
  return (
    <div className="flex justify-center">
      <motion.div
        className="p-6 rounded-lg shadow-lg w-full max-w-md bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Start Your Workout</h2>
        <motion.button
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={() => setIsWorkoutStarted(true)}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Workout
        </motion.button>
        <WorkoutTemplates />
      </motion.div>
    </div>
  );
};

export default StartWorkout;
