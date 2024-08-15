"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import WorkoutTracker from "@/components/WorkoutTracker";
import StartWorkout from "@/components/StartWorkout";

// export async function generateMetadata() {
//   return {
//     title: "Track Your Workout",
//     description: "Track Your Workout",
//   };
// }

const page = () => {
  const [loading, setLoading] = useState(false);

  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);

  const router = useRouter();

  const handleSaveWorkout = async (workout) => {
    setLoading(true);

    try {
      const response = await fetch("/api/save-workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ workout }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Workout saved successfully!");
      } else {
        throw new Error("Failed to save workout");
      }
    } catch (error) {
      console.error("Error saving workout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {!isWorkoutStarted ? (
        <StartWorkout setIsWorkoutStarted={setIsWorkoutStarted} />
      ) : (
        <WorkoutTracker onSave={handleSaveWorkout} />
      )}

      {loading && <p>Saving workout...</p>}
    </div>
  );
};

export default page;
