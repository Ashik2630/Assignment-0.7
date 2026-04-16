import React from "react";
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";
import navbarImg from '../../assets/logo.png'

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
        }
        to={`/`}
      >
        <IoMdHome /> Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
        }
        to={`/timeline`}
      >
        <RiTimeLine /> Timeline
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `btn ${isActive ? "bg-[#244D3F] text-white" : ""}`
        }
        to={`/stats`}
      >
        <TfiStatsUp />
        Stats
      </NavLink>
    </>
  );

  return (
    <nav className=" bg-base-100 shadow-sm ">
      <div className="navbar  max-w-450 mx-auto flex justify-between">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            {/* Button */}
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
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
            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>{links}</li>
            </ul>
          </div>
          <a href="/">
          <img src={navbarImg} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">{links}</div>
      </div>
    </nav>
  );
};

export default Navbar;
