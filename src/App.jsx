import "./App.css";
import { Routes, Route } from "react-router";

import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import THELIBRARY from "./Components/THELIBRARY";
import WorkoutDetails from "./Components/WorkoutDetails";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0C0D10]">
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

        <Route
          path="/workout/:id"
          element={<WorkoutDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;