"use client";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const formulas = {
  epley: {
    calculate: (weight, reps) => weight * (1 + reps / 30),
    description:
      "Epley's formula: 1RM = weight * (1 + reps / 30). This formula accounts for both weight and reps, providing a balanced estimate.",
  },
  brzycki: {
    calculate: (weight, reps) => weight * (36 / (37 - reps)),
    description:
      "Brzycki's formula: 1RM = weight * (36 / (37 - reps)). This formula is known for its simplicity and accuracy for reps under 10.",
  },
  lander: {
    calculate: (weight, reps) => weight / (1.013 - 0.0267123 * reps),
    description:
      "Lander's formula: 1RM = weight / (1.013 - 0.0267123 * reps). This formula is often used for its accuracy across a wide range of rep counts.",
  },
  lombardi: {
    calculate: (weight, reps) => weight * Math.pow(reps, 0.1),
    description:
      "Lombardi's formula: 1RM = weight * reps ^ 0.10. This formula is useful for its logarithmic approach, providing good estimates for high rep ranges.",
  },
  mayhew: {
    calculate: (weight, reps) =>
      (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps)),
    description:
      "Mayhew's formula: 1RM = (100 * weight) / (52.2 + 41.9 * e^(-0.055 * reps)). This formula is known for its accuracy, especially in trained athletes.",
  },
};

const exercises = [
  "Pull-Up",
  "Dip",
  "Squat",
  "Bench Press",
  "Deadlift",
  "Overhead Press",
];

const calculate1RM = (weight, reps, formula) => {
  switch (formula) {
    case "epley":
      return weight * (1 + 0.0333 * reps);
    case "brzycki":
      return weight / (1.0278 - 0.0278 * reps);
    case "lombardi":
      return weight * Math.pow(reps, 0.1);
    case "oconnor":
      return weight * (1 + 0.025 * reps);
    case "wathan":
      return (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps));
    case "mayhew":
      return (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps));
    default:
      return 0;
  }
};

const PRCalculator = () => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [selectedFormula, setSelectedFormula] = useState("epley");
  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);
  const [oneRepMax, setOneRepMax] = useState(null);

  const handleCalculate = useCallback(() => {
    const formula = formulas[selectedFormula];
    const weightNum = parseFloat(weight);
    const repsNum = parseFloat(reps);
    if (isNaN(weightNum) || isNaN(repsNum)) {
      alert("Please enter valid numbers for weight and reps.");
      return;
    }
    const max = formula.calculate(weightNum, repsNum);
    setOneRepMax(max.toFixed(2));
  }, [weight, reps, selectedFormula]);

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-md -mt-16">
      <h2 className="text-2xl font-bold mb-4">One Rep Max Calculator</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="exercise">
          Exercise
        </label>
        <select
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
          className="p-2 border rounded w-full"
        >
          {exercises.map((exercise) => (
            <option key={exercise} value={exercise}>
              {exercise}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="formula">
          Formula
        </label>
        <div className="flex items-center">
          <select
            value={selectedFormula}
            onChange={(e) => setSelectedFormula(e.target.value)}
            className="p-2 border rounded w-full"
          >
            {Object.keys(formulas).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>

          <FontAwesomeIcon
            icon={faInfoCircle}
            data-tooltip-id="formula-info"
            // data-tooltip-html={`<div>${formulas[selectedFormula].description}</div>`}
            className="ml-2 text-blue-500 cursor-pointer"
          />
          <ReactTooltip id="formula-info">
            <span className="flex max-w-xs text-xs">
              {formulas[selectedFormula].description}
            </span>
          </ReactTooltip>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="weight">
          Weight (kg)
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter the weight you used (in kg)"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="reps">
          Reps
        </label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter the number of reps you did"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Calculate 1RM
      </button>
      {oneRepMax && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          <h3 className="text-xl font-semibold">
            Estimated 1RM for {selectedExercise}: {oneRepMax} kg
          </h3>
        </div>
      )}
    </div>
  );
};

export default PRCalculator;
