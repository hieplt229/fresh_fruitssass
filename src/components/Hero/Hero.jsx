import React from "react";
import { motion } from "framer-motion";

import HeroPng from "../../assets/fruit-plate.png";
import LeafPng from "../../assets/leaf.png";
import { FadeRight } from "../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className="relative container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0  relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed font-averia"
            >
              Healthy
              <br />
              Fresh
              <span className="text-secondary">Fruits!</span>
            </motion.h1>

            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </motion.p>

            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-400"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet et
              doloribus ipsum sed maxime officiis neque voluptatibus, culpa
              explicabo nobis reiciendis numquam rem, illo ipsa laborum sit
              dicta dolore. Iste.
            </motion.p>

            {/* button section */}
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Order Now</button>
            </motion.div>
          </div>
        </div>

        {/* Hero Images */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[350px] md:w-[550px] drop-shadow"
            src={HeroPng}
            alt="Hero Images"
          />
        </div>

        {/* Leaf Images */}
        <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full md:w-[550px] md:w-max-[300px]"
            src={LeafPng}
            alt="LeafPng"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
