// components/WorkoutTracker.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import exercisesJson from "/public/exercises.json";

const WorkoutTracker = ({ onSave }) => {
  const [exercises, setExercises] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [setDetails, setSetDetails] = useState({ weight: "", reps: "" });

  useEffect(() => {
    setExercises(exercisesJson);
  }, []);

  const handleAddExercise = () => {
    if (!selectedExercise || !setDetails.weight || !setDetails.reps) return;

    setCurrentWorkout((prev) => [
      ...prev,
      { exercise: selectedExercise, ...setDetails },
    ]);
    setSelectedExercise("");
    setSetDetails({ weight: "", reps: "" });
  };

  const handleAddMultipleExercises = () => {
    if (selectedExercises.length === 0) return;

    const newWorkout = selectedExercises.map((exercise) => ({
      exercise: exercise.name,
      weight: exercise.weight || "",
      reps: exercise.reps || "",
    }));

    setCurrentWorkout((prev) => [...prev, ...newWorkout]);
    setSelectedExercises([]);
    setShowModal(false);
  };

  const handleSave = () => {
    if (!localStorage.getItem("userLoggedIn")) {
      // Prompt login
      alert("Please log in to save your workout.");
      return;
    }
    onSave(currentWorkout);
    setCurrentWorkout([]);
    localStorage.removeItem("currentWorkout");
  };

  useEffect(() => {
    localStorage.setItem("currentWorkout", JSON.stringify(currentWorkout));
  }, [currentWorkout]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Workout Tracker</h2>
      
      <button
        className="mt-2 p-2 bg-blue-500 text-white"
        onClick={() => setShowModal(true)}
      >
        Add Multiple Exercises
      </button>
      
      <input
        type="text"
        className="mt-2 p-2 border border-gray-300"
        placeholder="Select Exercise"
        value={selectedExercise}
        onChange={(e) => setSelectedExercise(e.target.value)}
      />
      <input
        type="number"
        className="mt-2 p-2 border border-gray-300"
        placeholder="Weight"
        value={setDetails.weight}
        onChange={(e) => setSetDetails({ ...setDetails, weight: e.target.value })}
      />
      <input
        type="number"
        className="mt-2 p-2 border border-gray-300"
        placeholder="Reps"
        value={setDetails.reps}
        onChange={(e) => setSetDetails({ ...setDetails, reps: e.target.value })}
      />
      <button
        className="mt-2 p-2 bg-blue-500 text-white"
        onClick={handleAddExercise}
      >
        Add Exercise
      </button>
      
      <div className="mt-4">
        {currentWorkout.map((item, index) => (
          <div key={index} className="flex justify-between p-2 border-b">
            <span>{item.exercise}</span>
            <span>{item.weight} kg / {item.reps} reps</span>
          </div>
        ))}
      </div>
      
      <button className="mt-4 p-2 bg-green-500 text-white" onClick={handleSave}>
        Save Workout
      </button>

      {/* Modal for multiple exercises */}
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg w-11/12 max-w-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h3 className="text-lg font-bold mb-2">Select Exercises</h3>
            {exercises.map((exercise) => (
              <div key={exercise.name} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedExercises.some(e => e.name === exercise.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedExercises((prev) => [...prev, exercise]);
                    } else {
                      setSelectedExercises((prev) => prev.filter(e => e.name !== exercise.name));
                    }
                  }}
                />
                <label className="ml-2">{exercise.name}</label>
                <input
                  type="number"
                  className="ml-2 p-1 border border-gray-300"
                  placeholder="Weight"
                  onChange={(e) => {
                    const weight = e.target.value;
                    setSelectedExercises((prev) =>
                      prev.map((ex) =>
                        ex.name === exercise.name ? { ...ex, weight } : ex
                      )
                    );
                  }}
                />
                <input
                  type="number"
                  className="ml-2 p-1 border border-gray-300"
                  placeholder="Reps"
                  onChange={(e) => {
                    const reps = e.target.value;
                    setSelectedExercises((prev) =>
                      prev.map((ex) =>
                        ex.name === exercise.name ? { ...ex, reps } : ex
                      )
                    );
                  }}
                />
              </div>
            ))}
            <button
              className="mt-4 p-2 bg-blue-500 text-white"
              onClick={handleAddMultipleExercises}
            >
              Add Selected Exercises
            </button>
            <button
              className="mt-2 p-2 bg-red-500 text-white"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default WorkoutTracker;
