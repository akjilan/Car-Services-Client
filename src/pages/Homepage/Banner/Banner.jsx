import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <>
      <div className="carousel h-[600px] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img className="w-full rounded-xl" src={img1} alt="" />
          <div className="absolute  top-0 bottom-0 h-full">
            <div
              className="text-white rounded-xl flex-col h-full justify-center pl-10
         flex md:w-1/2 gap-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"
            >
              <h3 className="text-5xl font-bold pr-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                debitis tempore aut accusamus quasi dolor alias nostrum adipisci
                sapiente fuga.
              </p>
              <div className="space-x-4">
                <button className="btn btn-primary uppercase">
                  Discover more
                </button>
                <button className="btn btn-secondary btn-outline uppercase">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img className="w-full" src={img2} alt="" />
          <div className="absolute  top-0 bottom-0 h-full">
            <div
              className="text-white rounded-xl flex-col h-full justify-center pl-10
         flex md:w-1/2 gap-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"
            >
              <h3 className="text-5xl font-bold pr-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                debitis tempore aut accusamus quasi dolor alias nostrum adipisci
                sapiente fuga.
              </p>
              <div className="space-x-4">
                <button className="btn btn-primary uppercase">
                  Discover more
                </button>
                <button className="btn btn-secondary btn-outline uppercase">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img className="w-full" src={img3} alt="" />
          <div className="absolute  top-0 bottom-0 h-full">
            <div
              className="text-white rounded-xl flex-col h-full justify-center pl-10
         flex md:w-1/2 gap-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"
            >
              <h3 className="text-5xl font-bold pr-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                debitis tempore aut accusamus quasi dolor alias nostrum adipisci
                sapiente fuga.
              </p>
              <div className="space-x-4">
                <button className="btn btn-primary uppercase">
                  Discover more
                </button>
                <button className="btn btn-secondary btn-outline uppercase">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img className="w-full" src={img4} alt="" />
          <div className="absolute rounded-xl top-0 bottom-0 h-full">
            <div
              className="text-white rounded-xl flex-col h-full justify-center pl-10
         flex md:w-1/2 gap-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"
            >
              <h3 className="text-5xl font-bold pr-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                debitis tempore aut accusamus quasi dolor alias nostrum adipisci
                sapiente fuga.
              </p>
              <div className="space-x-4">
                <button className="btn btn-primary uppercase">
                  Discover more
                </button>
                <button className="btn btn-secondary btn-outline uppercase">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
