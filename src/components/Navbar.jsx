import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Left Section */}
          <a href="#home" className="text-2xl font-bold">
            Savora
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>

            <a href="#menu" className="hover:text-orange-500 transition">
              Menu
            </a>

            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>

            <a href="#reviews" className="hover:text-orange-500 transition">
              Reviews
            </a>

            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>

            <a
              href="#menu"
              className="bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-lg font-semibold transition"
            >
              Order Now
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <LuX /> : <LuMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4 border-t border-gray-800 pt-5">

              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-orange-500 transition"
              >
                Home
              </a>

              <a
                href="#menu"
                onClick={closeMenu}
                className="hover:text-orange-500 transition"
              >
                Menu
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-orange-500 transition"
              >
                About
              </a>

              <a
                href="#reviews"
                onClick={closeMenu}
                className="hover:text-orange-500 transition"
              >
                Reviews
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-orange-500 transition"
              >
                Contact
              </a>

              <a
                href="#menu"
                onClick={closeMenu}
                className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-lg font-semibold text-center transition"
              >
                Order Now
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;