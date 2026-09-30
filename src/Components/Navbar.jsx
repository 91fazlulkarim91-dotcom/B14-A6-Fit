import {Link} from "react-router";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const menuItems = (
    <ul className="gap-3 flex flex-col max-lg:items-center lg:flex-row">
      <Link to="/workouts">Workouts</Link>
      <Link to="/plan">My Plan</Link>
    </ul>
  );
  return (
    <div className="max-lg:collapse  lg:mb-48 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="flex items-center ">
            <img src={logoImg} alt="FITLOG Logo" />
            <Link to="/" className=" text-xl">
              FITLOG
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/plan" className="btn btn-active">
            Plan
          </Link>
          <Link to="/saved" className="btn ">
            Saved
          </Link>
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
