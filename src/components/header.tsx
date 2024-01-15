import React from "react";
import { SiCoffeescript } from "react-icons/si";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="body-font" style={{ backgroundColor: "black" }}>
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          style={{ color: "white" }}
        >
          <SiCoffeescript style={{ fontSize: "50px" }} />
          <span className="ml-3 text-xl">Sarah Coffe Shop</span>
        </a>
        <nav
          className="md:ml-auto flex flex-wrap items-center text-base justify-center"
          style={{ color: "white" }}
        >
          <a className="mr-5 hover:text-green-500">Home</a>
          <a className="mr-5 hover:text-green-500">Coffee Menu</a>
          <a className="mr-5 hover:text-green-500">Contact</a>
        </nav>
        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="Search" />
            <button type="submit" className="searchButton">
              <FaSearch style={{ marginLeft: "6px" }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
