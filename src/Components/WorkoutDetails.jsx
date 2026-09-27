import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const WorkoutDetails = () => {
  const { id } = useParams();

  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setWorkout(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#0C0D10] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0C0D10] text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-[#15171D] rounded-xl overflow-hidden border border-[#22242B]">

        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">

          <div className="flex flex-wrap gap-2 mb-4">
            {workout.muscleGroups?.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h1 className="text-3xl font-extrabold uppercase">
            {workout.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {workout.equipment}
          </p>

        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;