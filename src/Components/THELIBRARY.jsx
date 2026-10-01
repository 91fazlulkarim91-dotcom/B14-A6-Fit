import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const THELIBRARY = () => {
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="py-6">
      <div className="mb-5">
        <h2 className="text-xl font-extrabold uppercase text-white">
          THE LIBRARY
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          Twelve lifts covering your major muscle groups.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            onClick={() => navigate(`/workout/${workout.id}`)}
            className="cursor-pointer bg-[#15171D] border border-[#22242B] rounded-lg overflow-hidden hover:border-[#C2F800] transition duration-300"
          >
            <div>
              <img src={workout.image} alt={workout.name} />
            </div>

            <div className="p-3">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {workout.muscleGroups?.map((muscle, index) => (
                  <span
                    key={index}
                    className="bg-[#C2F800] text-black text-[9px] font-extrabold uppercase px-2 py-1 rounded"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h3 className="text-sm font-extrabold uppercase text-white">
                {workout.name}
              </h3>

              <p className="text-[10px] text-gray-500 mt-1">
                {workout.equipment}
              </p>

              <div className="border-t border-[#25272D] mt-3 pt-3 flex items-center justify-between text-[9px] text-gray-500">
                <span>◷ {workout.duration || "10 min"}</span>
                <span>◉ {workout.calories || "150 kcal"}</span>
                <span>★ {workout.rating || "4.8"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default THELIBRARY;
