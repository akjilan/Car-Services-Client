import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 p-5 mr-3 flex flex-col justify-center items-center">
            <img className="w-3/4 h-auto rounded" src={person} />
            <img
              className="w-1/2 h-2/3 border-white border-8  rounded-md shadow-md translate-x-1/2 -translate-y-1/2"
              src={parts}
            />
          </div>
          <div className="lg:w-1/2 px-5">
            <h1 className="text-3xl text-orange-500 font-bold">About Us</h1>
            <h1 className="md:text-5xl text-2xl  font-bold text-accent">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </h1>
            <p className="py-6 text-accent">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Optional: adds a smooth scrolling effect
                });
              }}
              className="btn btn-warning btn-outline text-warning"
            >
              <Link to={"/services"}>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
