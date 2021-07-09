import React, { useState } from "react";
import { ShoppingCart, SearchBar } from "../index";
import { SiShanghaimetro } from "react-icons/si";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="bg-green-700 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3  ">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div className="flex flex-row justify-items-center">
            <div className="text-white h-full align-middle mx-7">
              <SiShanghaimetro size="50" />
            </div>
            <div>
              <p className="text-white ">Shopping Cart</p>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={(_) => setIsOpen((state) => !state)}
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <SearchBar />
        </div>
        <ShoppingCart />
      </header>
    </div>
  );
};

export default Header;
