import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="mb-4 md:mb-20">
        <section className="text-center space-y-4 md:pb-10 mb-4">
          <h2 className="font-bold text-xl uppercase text-orange-700">
            Services
          </h2>
          <h3 className="font-semibold text-4xl  text-orange-700">
            Our Services Area{" "}
          </h3>
          <p className="text-orange-700 px-3 lg:w-2/3 mx-auto">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </section>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto  gap-6 mb-5">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </section>
        <div className="flex justify-center mt-10 mb-4 md:mb-10">
          <button className="btn btn-outline btn-warning btn-sm ">
            More Services
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
