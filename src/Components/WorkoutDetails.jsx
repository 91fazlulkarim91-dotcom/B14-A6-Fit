import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { usePlan } from "../context/PlanContext";

const WorkoutDetails = () => {
  const { id } = useParams();

  const { plan, addToPlan, addToSaved } = usePlan();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setWorkout(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0C0D10] text-white flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0C0D10] text-white flex items-center justify-center">
        <h2 className="text-xl font-bold">Workout not found</h2>
      </div>
    );
  }

  const isPlanFull = plan.length >= 5;
  const isAlreadyInPlan = plan.some((item) => item.id === workout.id);

  return (
    <section className="min-h-screen bg-[#0C0D10] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Image */}
          <div>
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-[400px] lg:h-[520px] object-cover rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-black uppercase leading-tight">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-6 mt-3">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mt-4">
              {workout.muscleGroups?.map((muscle, index) => (
                <span
                  key={index}
                  className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded-full"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Information */}
            <div className="mt-5 rounded-xl border border-[#272A32] bg-[#15171D] overflow-hidden">
              <div className="flex justify-between items-center px-4 py-3 border-b border-[#272A32]">
                <span className="text-[10px] uppercase text-gray-400">
                  Equipment
                </span>
                <span className="text-xs">{workout.equipment}</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3 border-b border-[#272A32]">
                <span className="text-[10px] uppercase text-gray-400">
                  Difficulty
                </span>
                <span className="text-xs">{workout.difficulty}</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3 border-b border-[#272A32]">
                <span className="text-[10px] uppercase text-gray-400">
                  Sets
                </span>
                <span className="text-xs">{workout.sets}</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3 border-b border-[#272A32]">
                <span className="text-[10px] uppercase text-gray-400">
                  Reps
                </span>
                <span className="text-xs">{workout.reps}</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3 border-b border-[#272A32]">
                <span className="text-[10px] uppercase text-gray-400">
                  Duration
                </span>
                <span className="text-xs">{workout.duration}</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3 border-b border-[#272A32]">
                <span className="text-[10px] uppercase text-gray-400">
                  Calories
                </span>
                <span className="text-xs">{workout.caloriesBurned}</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-[10px] uppercase text-gray-400">
                  Rating
                </span>
                <span className="text-xs">⭐ {workout.rating}</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-sm font-bold uppercase mb-3">Instructions</h2>

              <ol className="space-y-3">
                {workout.instructions?.map((instruction, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 leading-5 flex gap-3"
                  >
                    <span className="text-gray-500">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-7">
              {/* Add To Plan */}
              <button
                onClick={() => addToPlan(workout)}
                disabled={isPlanFull || isAlreadyInPlan}
                className={`px-5 py-3 rounded-lg text-xs font-bold transition ${
                  isPlanFull || isAlreadyInPlan
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-[#C2F800] text-black hover:bg-[#d5ff38]"
                }`}
              >
                {isAlreadyInPlan
                  ? "✓ Already in plan"
                  : isPlanFull
                    ? "Plan Full"
                    : "➕ Add to today's plan"}
              </button>

              {/* Save */}
              <button
                onClick={() => addToSaved(workout)}
                className="border border-[#33363F] px-5 py-3 rounded-lg text-xs font-medium text-white hover:bg-[#181A20] transition"
              >
                ♡ Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
