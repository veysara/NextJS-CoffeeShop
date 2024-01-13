import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { SiCoffeescript } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="body-font"
      style={{ backgroundColor: "rgb(224, 224, 224)" }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-green-600 font-medium tracking-widest text-sm mb-3">
              CAPPUCCINO
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="coffee_type">Espresso</a>
              </li>
              <li>
                <a className="coffee_type">Steamed milk</a>
              </li>
              <li>
                <a className="coffee_type">Foam</a>
              </li>
              <li>
                <a className="coffee_type">Foamed milk</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-green-600 font-medium tracking-widest text-sm mb-3">
              FRAPPUCCINO
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="coffee_type">Short pulled</a>
              </li>
              <li>
                <a className="coffee_type">Ice cream</a>
              </li>
              <li>
                <a className="coffee_type">Steamed milk</a>
              </li>
              <li>
                <a className="coffee_type">Foam</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-green-600 font-medium tracking-widest text-sm mb-3">
              AMERICANO
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="coffee_type">Hot water</a>
              </li>
              <li>
                <a className="coffee_type">Espresso</a>
              </li>
              <li>
                <a className="coffee_type">Third Link</a>
              </li>
              <li>
                <a className="coffee_type">Ice cream</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-sm mb-3 text-green-600">RESERCH</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label className="leading-7 text-sm coffee_type">
                  Coffee Name
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-600 border-0 py-3 px-6 focus:outline-none hover:bg-green-500 rounded">
                <FaSearch />
              </button>
            </div>
            <p className="coffee_type text-gray-500 text-sm mt-2 md:text-left text-center">
              Below are 25 different
              <br className="lg:block hidden" />
              Types of Coffee
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            style={{ color: "white" }}
          >
            <SiCoffeescript style={{ fontSize: "50px" }} />
            <span className="ml-3 text-xl">Sarah Coffe Shop</span>
          </a>
          <p
            className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
            style={{ color: "white" }}
          >
            © 2020 Tailblocks —
            <a
              style={{ color: "white" }}
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span
            style={{ color: "white" }}
            className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          >
            <a>
              <FaFacebookF />
            </a>
            <a className="ml-3">
              <FaTwitter />
            </a>
            <a className="ml-3">
              <FaInstagram />
            </a>
            <a className="ml-3">
              <IoChatbubbleSharp />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
