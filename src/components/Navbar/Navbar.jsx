import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { FaBars } from "react-icons/fa";

import logo from "../../images/instaverse.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();
  // const path = (route) => {
  //    if (location.pathname === route) {
  //      return true;
  //    }
  //  };
  return (
    <nav className="relative flex items-center justify-between px-2 py-3 bg-pink-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex space-x-5">
            <img className="w-10" src={logo} alt="Instaverse" />
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Instaverse
            </a>
          </div>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center h-full" +
            (navbarOpen ? " flex mt-6 mb-6 items-center justify-center " : " hidden")
          }
        >
          <button
            type="button"
            class="flex-col lg:flex-row lg:ml-auto text-white bg-[#050708] 
            hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 f
            ont-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/
             dark:hover:bg-[#050708]/30 mr-2 mb-2"
             onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
