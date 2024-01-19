import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
  const { img, title, price } = service;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[200px] rounded" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#444] ">{title}</h2>
          <div className="flex justify-between">
            <p className="text-[#FF3811] font-semibold">price : {price} $</p>
            <Link>
              <HiArrowLongRight className="text-2xl text-[#FF3811]"></HiArrowLongRight>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
