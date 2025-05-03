import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'; // Import icons

const Footer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    hover: { scale: 1.05 },
  };

  // Social media icons data
  const socialIcons = [
    { icon: FaInstagram, label: 'Instagram', href: '#' },
    { icon: FaTwitter, label: 'Twitter / X', href: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
    { icon: FaFacebook, label: 'Facebook', href: '#' },
    { icon: FaGithub, label: 'Facebook', href: 'https://github.com/Developer-Madhu' }
  ];

  return (
    <footer
      ref={containerRef}
      className="bg-black text-white py-12 md:py-20"
    >
      <motion.div
        className="container mx-auto px-2"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={footerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Let's Work Together Section */}
          <div className="lg:col-span-2 flex flex-col items-start justify-center">
            <h2 className="text-2xl font-[Inter] md:text-5xl font-semibold mb-4 md:mb-6">
              Let's work together and build cool things!
            </h2>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-purple-600 place-self-center md:place-self-start text-white px-6 py-3 hover:bg-purple-700 transition-colors duration-200"
            >
            <a href="#contact">Get Started</a>
            </motion.button>
          </div>

          {/* Main Links Section */}
          <div className="flex flex-col items-center sm:items-center sm:text-center">
            <h3 className="text-lg font-semibold mb-4">Main</h3>
            <ul className="space-y-2 text-center">
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#projects" className="hover:text-gray-300 transition-colors">Project Single</a>
              </motion.li>
            </ul>
          </div>

          {/* Others Links Section */}
          <div className="flex flex-col items-center sm:items-center sm:text-center">
            <h3 className="text-lg font-semibold mb-4">Others</h3>
            <ul className="space-y-2 text-center">
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#blog" className="hover:text-gray-300 transition-colors">Blog</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#blog-single" className="hover:text-gray-300 transition-colors">Blog Single</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
              </motion.li>
            </ul>
          </div>

          {/* Utility Pages Section */}
          <div className="flex flex-col items-center sm:items-center sm:text-center">
            <h3 className="text-lg font-semibold mb-4">Utility Pages</h3>
            <ul className="space-y-2 text-center">
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#style-guide" className="hover:text-gray-300 transition-colors">Style Guide</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#licenses" className="hover:text-gray-300 transition-colors">Licenses</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#changelog" className="hover:text-gray-300 transition-colors">Changelog</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#password-protected" className="hover:text-gray-300 transition-colors">Password Protected</a>
              </motion.li>
              <motion.li variants={linkVariants} whileHover="hover">
                <a href="#404" className="hover:text-gray-300 transition-colors">404 Page</a>
              </motion.li>
            </ul>
          </div>

          {/* Follow Me Section */}
          <div className="flex flex-col items-center md:items-center    ">
            <h3 className="text-lg font-semibold mb-4">Follow me</h3>
            <ul className="space-y-2 text-center flex flex-row gap-4 sm:justify-center">
              {socialIcons.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li key={item.label} variants={linkVariants} whileHover="hover">
                    <a href={item.href} className="hover:text-gray-300 transition-colors">
                      <Icon size={24} />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm text-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            Madhusudhan | 2025 © India, All Rights Reserved
          </p>
          <p className="text-gray-400">Developer Madhu</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
