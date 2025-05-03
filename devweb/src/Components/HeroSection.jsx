// import React from 'react';
// import { motion } from 'framer-motion';
// import img from '../assets/myimage.jpg';

// const navItems = ['Projects', 'Services', 'About', 'Blog', 'Contact'];

// // Animation variants
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.3
//     }
//   }
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// const HeroSection = () => {
//   return (
//     <motion.div
//       initial="hidden"
//       animate="show"
//       variants={container}
//       className="min-h-screen bg-white px-6 md:px-16 pt-8 overflow-hidden"
//     >
//       {/* Navbar */}
//       <motion.div variants={item} className="flex justify-between items-center mb-12">
//         <motion.h1 
//           whileHover={{ scale: 1.05 }}
//           className="text-2xl font-bold cursor-pointer"
//         >
//           Dev Madhu.
//         </motion.h1>
//         <nav id='home' className="hidden md:flex space-x-8 text-sm text-black">
//           {navItems.map((item) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               whileHover={{ scale: 1.1, color: "#a442f1" }}
//               className="transition-colors duration-300"
//             >
//               {item}
//             </motion.a>
//           ))}
//         </nav>
//         <div className="md:hidden">
//           <motion.div 
//             whileTap={{ scale: 0.9 }}
//             className="w-6 h-6 flex flex-col justify-between cursor-pointer"
//           >
//             {[...Array(3)].map((_, i) => (
//               <span key={i} className="block h-[2px] bg-black" />
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//       <br />
//       {/* Content */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
//         {/* Text Left */}
//         <motion.div 
//           variants={item}
//           className="flex-1 space-y-4 text-left"
//         >
//           <motion.h2 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-2xl font-[Poppins] font-semibold md:text-3xl"
//           >
//             Hey there, I'm
//           </motion.h2>
//           <motion.h1 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-3xl md:text-4xl font-[Poppins] font-bold"
//           >
//             Madhusudhan
//           </motion.h1>
//           <br />
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-base mt-4"
//           >
//             Currently available for <br />
//             <motion.span 
//               whileHover={{ scale: 1.05 }}
//               className="font-semibold inline-block"
//             >
//               freelance projects 🚀
//             </motion.span>
//           </motion.p>
//         </motion.div>

//         {/* Image Center */}
//         <motion.div 
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
//           className="flex justify-center items-center flex-1"
//         >
//           <div className="w-[240px] h-[240px] md:w-[340px] md:h-[340px] rounded-full bg-gray-100 overflow-hidden relative group">
//             <motion.img
//               src={img}
//               alt="Profile"
//               className="object-cover w-full h-full"
//               loading="lazy"
//               whileHover={{ scale: 1.05 }}
//             />
//             <div className="absolute inset-0 bg-[#a442f1] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
//           </div>
//         </motion.div>

//         {/* Description & Button Right */}
//         <motion.div 
//           variants={item}
//           className="flex-1 font-[Open_Sans] text-gray-700 text-sm max-w-sm mx-auto md:mx-0 md:text-right"
//         >
//           <motion.p
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.6 }}
//           >
//             A seasoned UI/UX designer dedicated to bridging creativity with
//             user-centric design principles, sculpting intuitive digital
//             experiences that resonate with audiences. With a knack for
//             transforming ideas into visually compelling interfaces.
//           </motion.p>
//           <div className="mt-8 flex justify-center md:justify-end">
//             <motion.button
//               whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(164, 66, 241, 0.3)" }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 }}
//               className="bg-indigo-600 text-white py-3 px-6 rounded-full font-semibold text-sm w-40 h-14 md:w-36 md:h-36 md:rounded-full md:text-xs flex items-center justify-center transition-all duration-300"
//             >
//             <a href="#contact">LET'S CHAT</a>
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Footer Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8 }}
//         className="mt-16 font-bold font-[Inter] z-10 absolute left-[22%] top-[85%] text-4xl md:text-[90px] md:top-[60%] leading-none tracking-tight md:text-left"
//       >
//         WEB DEVELOPER
//       </motion.h1>
//     </motion.div>
//   );
// };

// export default React.memo(HeroSection);
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img from '../assets/myimage.jpg';

const navItems = ['Projects', 'Services', 'About', 'Blog', 'Contact'];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen bg-white px-6 md:px-16 pt-8 overflow-hidden relative"
    >
      {/* Navbar */}
      <motion.div variants={item} className="flex justify-between items-center mb-12">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer"
        >
          Dev Madhu.
        </motion.h1>

        {/* Desktop Nav */}
        <nav id="home" className="hidden md:flex space-x-8 text-sm text-black">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#a442f1" }}
              className="transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="w-6 h-6 flex flex-col justify-between cursor-pointer"
          >
            {[...Array(3)].map((_, i) => (
              <span key={i} className="block h-[2px] bg-black" />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 right-0 bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden z-40"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black text-sm hover:text-[#a442f1] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* Text Left */}
        <motion.div
          variants={item}
          className="flex-1 space-y-4 text-left"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-[Poppins] font-semibold md:text-3xl"
          >
            Hey there, I'm
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-[Inter] font-bold"
          >
            Madhusudhan
          </motion.h1>
          <br />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base mt-4"
          >
            Currently available for <br />
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="font-semibold inline-block"
            >
              freelance projects 🚀
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="flex justify-center items-center flex-1"
        >
          <div className="w-[240px] h-[240px] md:w-[340px] md:h-[340px] rounded-full bg-gray-100 overflow-hidden relative group">
            <motion.img
              src={img}
              alt="Profile"
              className="object-cover w-full h-full"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-[#a442f1] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
          </div>
        </motion.div>

        {/* Description & Button */}
        <motion.div
          variants={item}
          className="flex-1 font-[Open_Sans] text-gray-700 text-sm max-w-sm mx-auto md:mx-0 md:text-right"
        >
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            A seasoned UI/UX designer dedicated to bridging creativity with
            user-centric design principles, sculpting intuitive digital
            experiences that resonate with audiences. With a knack for
            transforming ideas into visually compelling interfaces.
          </motion.p>
          <div className="mt-8 flex justify-center md:justify-end">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(164, 66, 241, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-indigo-600 text-white py-3 px-6 rounded-full font-semibold text-sm w-40 h-14 md:w-36 md:h-36 md:rounded-full md:text-xs flex items-center justify-center transition-all duration-300"
            >
              <a href="#contact">LET'S CHAT</a>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Footer Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 font-bold font-[Inter] z-10 absolute left-[22%] top-[62%] text-4xl md:text-[90px] md:top-[55%] leading-none tracking-tight md:text-left"
      >
        WEB DEVELOPER
      </motion.h1>
    </motion.div>
  );
};

export default React.memo(HeroSection);
