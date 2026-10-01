import "./App.css";
import { Routes, Route } from "react-router";

import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import THELIBRARY from "./Components/THELIBRARY";
import WorkoutDetails from "./Components/WorkoutDetails";
import Footer from "./Components/Footer";
import Plan from "./page/Plan";
import Saved from "./page/Saved";
import { usePlan } from "./context/PlanContext";

function Toast() {
  const { toast } = usePlan();

  if (!toast) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <div
        className={`rounded-full border px-4 py-2 text-sm font-semibold shadow-lg ${
          toast.type === "error"
            ? "border-red-500/40 bg-red-500/15 text-red-100"
            : "border-[#C2F800]/40 bg-[#C2F800] text-black"
        }`}
      >
        {toast.message}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0C0D10]">
      <Toast />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <THELIBRARY />
            </>
          }
        />

        <Route path="/workout/:id" element={<WorkoutDetails />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
