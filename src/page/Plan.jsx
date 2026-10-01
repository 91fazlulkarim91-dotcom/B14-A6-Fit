import React, { useState } from "react";
import { Link } from "react-router";
import { usePlan } from "../context/PlanContext";

const Plan = () => {
  const { plan, saved, metrics, removeFromPlan, markAsDone } = usePlan();
  const [activeTab, setActiveTab] = useState("plan");
  const items = activeTab === "plan" ? plan : saved;

  return (
    <div className="min-h-screen bg-[#0C0D10] px-4 pb-10 text-white">
      <div className="mx-auto max-w-6xl pt-10">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white">
          MY PLAN
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="mt-6 grid gap-4 rounded-xl border border-[#2A2E38] bg-[#11141A] px-3 py-4 md:grid-cols-3">
          <div className="flex items-center justify-between border-b border-[#2A2E38] pb-1 md:border-none md:pb-0">
            <span className="text-sm uppercase text-gray-400">Exercises</span>
            <span className="text-4xl font-black text-[#C2F800]">
              {metrics.exercises}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-[#2A2E38] pb-1 md:border-none md:pb-0">
            <span className="text-sm uppercase text-gray-400">Minutes</span>
            <span className="text-4xl font-black text-[#C2F800]">
              {metrics.minutes}
            </span>
          </div>

          <div className="flex items-center justify-between md:border-none">
            <span className="text-sm uppercase text-gray-400">Calories</span>
            <span className="text-4xl font-black text-[#C2F800]">
              {metrics.calories}
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-b border-[#2A2E38] pb-3">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeTab === "plan"
                  ? "bg-[#C2F800] text-black"
                  : "border border-[#2A2E38] bg-transparent text-gray-300"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#C2F800] text-black"
                  : "border border-[#2A2E38] bg-transparent text-gray-300"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort By</span>
            <select className="rounded-lg border border-[#2A2E38] bg-[#11141A] px-3 py-2 text-sm text-white outline-none">
              <option>Duration</option>
              <option>Calories</option>
              <option>Name</option>
            </select>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="mt-8 flex min-h-[420px] items-center justify-center rounded-xl border border-[#2A2E38] bg-[#11141A]">
            <div className="text-center">
              <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                NOTHING HERE YET
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d7ff3c]"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-xl border border-[#2A2E38] bg-[#11141A] p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="mb-2 flex flex-wrap gap-2">
                    {item.muscleGroups?.slice(0, 2).map((muscle, index) => (
                      <span
                        key={`${item.id}-${muscle}-${index}`}
                        className="rounded-full bg-[#C2F800] px-2 py-1 text-[9px] font-extrabold uppercase text-black"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xl font-black uppercase text-white">
                    {item.name}
                  </h4>

                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-400">
                    <span>{item.duration || 15} min</span>
                    <span>{item.caloriesBurned || 150} kcal</span>
                    <span>{item.equipment}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {activeTab === "plan" && (
                    <button
                      onClick={() => markAsDone(item.id)}
                      className={`rounded-lg px-3 py-2 text-xs font-bold ${
                        item.isDone
                          ? "bg-green-500/20 text-green-300"
                          : "bg-[#C2F800] text-black"
                      }`}
                    >
                      {item.isDone ? "Done" : "Mark done"}
                    </button>
                  )}

                  <button
                    onClick={() => {
                      if (activeTab === "plan") {
                        removeFromPlan(item.id);
                      }
                    }}
                    className="rounded-lg border border-[#2A2E38] px-3 py-2 text-xs font-medium text-gray-300 hover:bg-[#1B1E25]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Plan;