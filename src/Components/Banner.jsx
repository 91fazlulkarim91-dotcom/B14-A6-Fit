import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="hero  bg-[#15171D]  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img alt="Tailwind CSS hero component" src={banner} />
        <div>
            <p className="text-xl font-bold text-[#C2F800]">WORKOUT LIBRARY</p>
          <h1 className="text-6xl  font-bold">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="py-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="btn font-bold bg-[#C2F800] text-black">
            BROWSE WORKOUTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
