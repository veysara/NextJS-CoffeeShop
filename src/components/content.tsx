import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Content = () => {
  return (
    <section
      className="text-gray-600 body-font"
      style={{ backgroundColor: "rgb(15, 9, 4)" }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://img.delicious.com.au/OVuZkaXj/w759-h506-cfill/del/2021/06/how-much-coffee-should-you-drink-per-dayy-heres-what-the-science-says-154176-3.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-500">
            Good coffee for you
            <br className="hidden lg:inline-block" />
            Cappuccino
          </h1>
          <p className="mb-8 leading-relaxed" style={{ color: "white" }}>
            I would say that a cappucino is a cappuccino is a cappuccino, but if
            I HAD to differentiate, I would do so in several ways. First, I
            would say that there is no such thing as an iced cappuccino, thus
            iced and hot are NOT two different types of cappuccino.
          </p>
          <button
            id="btn"
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
            Read More
            <FaAngleDoubleRight
              style={{ fontSize: "20px", marginLeft: "15px" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
