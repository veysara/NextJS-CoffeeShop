import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="content container p-5 mx-auto py-24 md:flex-row flex-col items-center">
        <h3>
          Start Your Day With a
          <br />
          Fresh Coffee
        </h3>
        <p>
          Coffee is a beverage brewed from roasted coffee beans,
          <br /> coffee has a stimulating effect on humans
        </p>
        <button
          id="btn"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
        >
          Order Now
          <SiBuymeacoffee style={{ fontSize: "20px", marginLeft: "15px" }} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
