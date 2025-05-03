import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img from '../assets/myimage.jpg'

const Me = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animation of children
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

    const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <section id='about' className="bg-white py-16 md:py-8" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="font-[Inter] text-3xl md:text-6xl font-bold text-gray-800 mb-12 text-center">
          Why Choose Me?
        </h2>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Use isInView to trigger animation
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <motion.div variants={imageVariants}   initial="hidden"
              animate={isInView ? "visible" : "hidden"}>
              <img
                src={img}
                alt="Laptop Mockup"
                className=" shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div variants={itemVariants}  initial="hidden"
              animate={isInView ? "visible" : "hidden"} className="space-y-4">
              <div className="flex items-center gap-5">
                <span className="text-2xl font-semibold text-gray-600">(01)</span>
                <h3 className="text-2xl font-[Poppins] font-semibold text-gray-800">Creative Ideas</h3>
              </div>
              <p className="text-gray-600 px-15">
                My branding services are designed to help your business establish a strong and
                memorable identity. From crafting compelling brand stories to developing visual
                elements that resonate.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}  initial="hidden"
              animate={isInView ? "visible" : "hidden"} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold text-gray-600">(02)</span>
                <h3 className="text-2xl font-[Poppins] font-semibold text-gray-800">Expert In Tools</h3>
              </div>
              <p className="text-gray-600 px-15">
                My branding services are designed to help your business establish a strong and
                memorable identity. From crafting compelling brand stories to developing visual
                elements that resonate.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}  initial="hidden"
              animate={isInView ? "visible" : "hidden"} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold text-gray-600">(03)</span>
                <h3 className="text-2xl font-[Poppins] font-semibold text-gray-800">Proven Results</h3>
              </div>
              <p className="text-gray-600 px-15">
                My branding services are designed to help your business establish a strong and
                memorable identity. From crafting compelling brand stories to developing visual
                elements that resonate.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Me;
