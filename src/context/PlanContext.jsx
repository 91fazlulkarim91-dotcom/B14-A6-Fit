import React, { createContext, useContext, useState } from "react";

const PlanContext = createContext(null);

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => setToast(null), 2500);
  };

  // Add workout to today's plan
  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      showToast("Today's plan is full! Maximum 5 workouts.", "error");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      showToast("This workout is already in your plan!", "error");
      return;
    }

    setPlan((prev) => [
      ...prev,
      {
        ...workout,
        isDone: false,
      },
    ]);

    showToast(`${workout.name} added to today's plan!`, "success");
  };

  // Add workout to saved
  const addToSaved = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      showToast("This workout is already saved!", "error");
      return;
    }

    setSaved((prev) => [...prev, workout]);

    showToast(`${workout.name} saved for later!`, "success");
  };

  // Remove from plan
  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  // Remove from saved
  const removeFromSaved = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  };

  // Mark workout as done
  const markAsDone = (id) => {
    setPlan((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isDone: true } : item)),
    );
  };

  // Plan metrics
  const metrics = {
    exercises: plan.length,

    minutes: plan.reduce((total, item) => total + item.duration, 0),

    calories: plan.reduce((total, item) => total + item.caloriesBurned, 0),
  };

  const value = {
    plan,
    saved,
    toast,
    showToast,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    metrics,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

// Custom hook
export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
};
