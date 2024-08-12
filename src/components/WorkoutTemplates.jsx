"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const WorkoutTemplates = () => {
  const [templates, setTemplates] = useState([
    { id: 1, name: "Full Body Blast", exercises: ["Push-ups", "Squats"] },
    { id: 2, name: "Upper Body Focus", exercises: ["Pull-ups", "Dips"] }
  ]);

  const handleAddTemplate = () => {
    alert("Add new template functionality");
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Workout Templates</h2>
      <div className="mb-4">
        {templates.length > 0 ? (
          <ul>
            {templates.map((template) => (
              <motion.li
                key={template.id}
                className="mb-3 p-4 bg-white rounded-md shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold">{template.name}</h3>
                <ul className="mt-2">
                  {template.exercises.map((exercise, index) => (
                    <li key={index} className="text-gray-700">
                      - {exercise}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        ) : (
          <p>No templates available</p>
        )}
      </div>
      <motion.button
        className="w-full py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
        onClick={handleAddTemplate}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add New Template
      </motion.button>
    </div>
  );
};

export default WorkoutTemplates;
