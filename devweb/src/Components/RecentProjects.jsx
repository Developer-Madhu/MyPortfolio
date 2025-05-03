import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ecommerce from '../assets/Ecommerce.png'
import mockmate from '../assets/mockmate.png'
import mock from '../assets/mock.png'
import health from '../assets/health.png'
import net from '../assets/net.png'

// Project data with image paths
const projects = [
  {
    id: 1,
    title: "HealthSync Virtual AI Assistant",
    description: "Developed a visually appealing and highly functional interface backed by Google Gemini AI model for user interactions with responses.",
    image: health,
    link: "https://github.com/Developer-Madhu/HealthSync-VirtualAI"
  },
  {
    id: 2,
    title: "MockMate AI Interview System",
    description: "An AI powered interview system in which user can prepare for their interview, attempt mocks and get personalized feedback",
    image: mock,
    link: "#"
  },
  {
    id: 3,
    title: "Socio Ecommerce",
    description: "Created a web app with social media interface increasing 95% user satisfaction with the scrolling algorithm and interactive elements for the customer & sellers",
    image: ecommerce,
    link: "https://github.com/Developer-Madhu/Socio-Ecommerce"
  },
  {
    id: 4,
    title: "Postly AI Media",
    description: "A Web Application with integrated AI Agents which can post content on multiple social media handles at single click!",
    image: mockmate,
    link: "https://github.com/Developer-Madhu/Postly-Ai"
  },
  {
    id: 5,
    title: "NetWorthy",
    description: "A Web Application with integrated AI Agents which can post content on multiple social media handles at single click!",
    image: net,
    link: "https://github.com/Developer-Madhu/NetWorthy"
  }
];

const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className="flex-shrink-0 w-[300px] border-b border-gray-200 pb-6"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-gray-200 h-48 mb-4 overflow-hidden"
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      
      <div className="px-2">
        <motion.h3 
          whileHover={{ x: 5 }}
          className="text-xl font-[Inter] font-bold mb-2"
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <motion.a
          href={project.link}
          whileHover={{ x: 5 }}
          className="text-sm border-1 p-2 font-medium text-gray-900 hover:text-gray-600 transition-colors inline-flex items-center"
        >
          View Project
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

const RecentProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
    id='projects'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 md:px-16 pt-8 overflow-hidden bg-white max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl font-[Inter] font-bold mb-8"
      >
        Recent projects
      </motion.h2>
      
      <div className="relative">
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex space-x-8 pl-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Right fade effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"
        />
      </div>
    </motion.section>
  );
};

export default RecentProjects;