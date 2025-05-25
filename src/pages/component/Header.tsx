import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-black border-b-2 border-green-900 px-4 sm:px-6 lg:px-10 py-3 shadow-lg">
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="self-center text-xl sm:text-2xl font-extrabold tracking-tight text-white drop-shadow-lg select-none">
              🚀 Rocket Store
            </span>
          </div>

          {/* Right buttons + hamburger */}
          <div className="flex items-center gap-2 lg:order-2">
            <Button
              variant="secondary"
              className="shadow hover:shadow-lg transition-all duration-200 text-xs sm:text-sm md:text-base"
            >
              Log in
            </Button>
            <Button
              variant="primary"
              className="shadow hover:shadow-lg transition-all duration-200 text-xs sm:text-sm md:text-base"
            >
              Get started
            </Button>

            {/* Hamburger */}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-900"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon */}
              <svg
                className={`w-6 h-6 ${menuOpen ? 'hidden' : 'block'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 000 2h12a1 1 0 100-2H4z"
                  clipRule="evenodd"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`w-6 h-6 ${menuOpen ? 'block' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ${
              menuOpen ? 'block' : 'hidden'
            } bg-black lg:bg-transparent absolute lg:static left-0 top-full z-40 lg:z-auto`}
            id="mobile-menu"
          >
            <ul className="flex flex-col lg:flex-row font-semibold lg:space-x-8 mt-4 lg:mt-0 px-6 lg:px-0 pb-4 lg:pb-0">
              <li>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/');
                  }}
                  className="block w-full text-left py-2 px-3 rounded text-white bg-green-900 lg:bg-transparent lg:text-green-900 hover:bg-green-800 hover:text-white lg:hover:bg-transparent lg:hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-900"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/orders');
                  }}
                  className="block w-full text-left py-2 px-3 rounded text-white bg-green-900 lg:bg-transparent lg:text-green-900 hover:bg-green-800 hover:text-white lg:hover:bg-transparent lg:hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-900"
                >
                  Pedidos
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
