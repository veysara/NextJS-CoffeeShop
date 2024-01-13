import React from "react";
import { PiShootingStar } from "react-icons/pi";
import { IoMdCut } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { ImFlag } from "react-icons/im";
import { FaMountainSun } from "react-icons/fa6";

const Content = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Pitchfork Kickstarter Taxidermy
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <PiShootingStar style={{ fontSize: "25px" }} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <IoMdCut style={{ fontSize: "25px" }} />
              </div>
              <div>
                <img
                  src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
                  alt=""
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <GoPeople style={{ fontSize: "25px" }} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Neptune
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <ImFlag style={{ fontSize: "20px" }} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FaMountainSun style={{ fontSize: "25px" }} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Bunker
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <FaMountainSun style={{ fontSize: "25px" }} />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Ramona Falls
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
            </div>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default Content;
