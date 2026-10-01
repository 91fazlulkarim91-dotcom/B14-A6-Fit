import { Link } from "react-router";
import logoImg from "../../assets/logo.png";
import { usePlan } from "../context/PlanContext";

const Navbar = () => {
  const { plan, saved } = usePlan();

  const menuItems = (
    <ul className="flex flex-col gap-3 max-lg:items-center lg:flex-row">
      <Link to="/" className="text-sm font-medium text-gray-300 transition hover:text-white">
        Workouts
      </Link>
      <Link to="/plan" className="text-sm font-medium text-gray-300 transition hover:text-white">
        My Plan
      </Link>
    </ul>
  );

  return (
    <header className="mx-auto max-w-6xl px-4 pt-4">
      <div className="flex items-center justify-between rounded-xl border border-[#1F232B] bg-[#0D1015] px-4 py-3 shadow-sm shadow-black/20">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="FITLOG Logo" className="h-6 w-6" />
          <Link to="/" className="text-xl font-black uppercase tracking-tight text-white">
            FITLOG
          </Link>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">{menuItems}</nav>

        <div className="flex items-center gap-3">
          <Link
            to="/plan"
            className="rounded-lg bg-[#C2F800] px-4 py-2 text-sm font-bold text-black"
          >
            Plan <span className="ml-1 text-xs opacity-80">{plan.length}</span>
          </Link>
          <Link
            to="/saved"
            className="rounded-lg border border-[#2A2E38] px-4 py-2 text-sm font-medium text-white"
          >
            Saved <span className="ml-1 text-xs opacity-80">{saved.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
