import React from "react";
import { Link } from "react-router";
import { usePlan } from "../context/PlanContext";

const Saved = () => {
  const { saved, removeFromSaved } = usePlan();

  if (saved.length === 0) {
    return (
      <div className="min-h-screen bg-[#0C0D10] px-4 pb-10 text-white">
        <div className="mx-auto max-w-6xl pt-10">
          <div className="flex min-h-[420px] items-center justify-center rounded-xl border border-[#2A2E38] bg-[#11141A]">
            <div className="text-center">
              <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                NOTHING HERE YET
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                Save a workout to keep it for later.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d7ff3c]"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0C0D10] px-4 pb-10 text-white">
      <div className="mx-auto max-w-6xl pt-10">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white">
          SAVED
        </h2>

        <div className="mt-6 space-y-3">
          {saved.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-xl border border-[#2A2E38] bg-[#11141A] p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h4 className="text-xl font-black uppercase text-white">{item.name}</h4>
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-400">
                  <span>{item.duration || 15} min</span>
                  <span>{item.caloriesBurned || 150} kcal</span>
                  <span>{item.equipment}</span>
                </div>
              </div>

              <button
                onClick={() => removeFromSaved(item.id)}
                className="rounded-lg border border-[#2A2E38] px-3 py-2 text-xs font-medium text-gray-300 hover:bg-[#1B1E25]"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saved;