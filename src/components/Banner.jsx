import React from "react";
import bannerImg from "/images/home/banner.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        {/* img */}
        <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
        <div className=" ">
          <img src={bannerImg} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64">
              <img src="/images/home/b-food1.png" alt=""  className="rounded-2xl"/>
              <div className="space-y-1">
                <h5>Spicy noodles</h5>
                <div className="rating rating-sm">
              
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            <div className="bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
              <img src="/images/home/b-food1.png" alt=""  className="rounded-2xl"/>
              <div className="space-y-1">
                <h5>Spicy noodles</h5>
                <div className="rating rating-sm">
                <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
          </div>
        </div>
    </motion.div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7 scale-in-center">
        <h2 className="md:text-5xl text-[#000] text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable <span className="text-green">Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <Link to={`/menu`} className=" mt-5  list-none ">
          <button className="bg-green font-semibold btn text-white mt-3 rounded-full">
            Order Now
          </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
