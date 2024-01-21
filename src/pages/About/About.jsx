import React from "react";
import aboutImg from "../../assets/images/team/1.jpg";
const About = () => {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
            About Our Car Dealership
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 m-4 mr-6">
              <img
                className="rounded-lg shadow-lg"
                src={aboutImg}
                alt="Car Dealership"
              />
            </div>
            <div className="lg:w-1/2 p-5 lg:p-12 text-justify text-xl ">
              <p className="text-lg leading-relaxed text-gray-700">
                Welcome to our car dealership, where we strive to provide the
                best automotive solutions for our customers. With a wide range
                of vehicles, from sleek sedans to powerful SUVs, we have
                something for everyone.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Our team of experienced professionals is dedicated to ensuring
                your car-buying experience is smooth and enjoyable. Whether
                you're looking for a new or used car, we've got you covered.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Visit our dealership today and explore the latest models,
                financing options, and exceptional customer service. We look
                forward to helping you find the perfect car that fits your style
                and needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
