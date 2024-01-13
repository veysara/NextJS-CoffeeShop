import React from "react";
import { SiCoffeescript } from "react-icons/si";
import { SiBuymeacoffee } from "react-icons/si";

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
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0">
          Coffee Order
          <SiBuymeacoffee style={{ fontSize: "20px", marginLeft: "10px" }} />
        </button>
      </div>
    </header>
  );
};

export default Header;
