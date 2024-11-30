import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/sllogo5.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("Hello");

    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      closeMenu();
    };

    if (showMenu) {
      // Add event listener when menu is open
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      // Cleanup event listener
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav
      className="bg-sky-900 fixed w-full z-50 top-0 text-white py-1 sm:py-3 shadow-lg flex items-center px-3"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the navbar
    >
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="md:h-16 md:w-60 h-12 w-40 rounded-full bg-center"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {[
            { id: "home", label: "Home" },
            { id: "courses", label: "About" },
            { id: "schedule", label: "Services" },
          ].map((section) => (
            <ScrollLink
              key={section.id}
              to={section.id}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              activeClass="active"
              onSetActive={() => setActiveSection(section.id)}
              className={`text-xl font-medium cursor-pointer hover:text-gray-200 hover:border-b-2 hover:border-yellow-300 ${
                activeSection === section.id ? "text-yellow-300" : ""
              }`}
            >
              {section.label}
            </ScrollLink>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={600}
            offset={-80}
            activeClass="active"
            onSetActive={() => setActiveSection("contact")}
            className={`text-2xl font-medium cursor-pointer hover:text-gray-200 border-2 px-4 py-2 hover:bg-green-600 hover:border-green-600 rounded-sm ${
              activeSection === "contact"
                ? " text-yellow-300 border-green-600"
                : ""
            }`}
          >
            Contact
          </ScrollLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <span
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing menu when clicking toggle icon
              toggleMenu();
            }}
            className="text-4xl cursor-pointer"
          >
            {showMenu ? (
              <span className="text-4xl cursor-pointer text-red-600 font-bold">
                &#x292C;
              </span>
            ) : (
              <span className="text-2xl cursor-pointer text-white">
                &#9776;
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          className={`fixed bg-cyan-500 text-white w-30 top-10 right-0 z-40 flex flex-col space-y-3 px-6 py-4 lg:hidden my-4 transform transition-transform duration-300 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          {[
            { id: "home", label: "Home" },
            { id: "courses", label: "About" },
            { id: "schedule", label: "Services" },
            { id: "contact", label: "Contact" },
          ].map((section) => (
            <ScrollLink
              key={section.id}
              to={section.id}
              spy={true}
              smooth={true}
              duration={600}
              offset={-55}
              activeClass="active"
              onSetActive={() => {
                setActiveSection(section.id);
              }}
              className={`text-lg font-medium cursor-pointer hover:text-gray-200 hover:border-b-2 hover:border-yellow-300 ${
                activeSection === section.id ? "" : ""
              }`}
            >
              {section.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
