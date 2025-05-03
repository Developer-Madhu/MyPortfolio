import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const services = [
  {
    id: '1',
    title: 'Website Development',
    description:
      'We create impactful branding solutions that help businesses build a strong, lasting presence online. Leveraging modern web technologies like the MERN stack (MongoDB, Express.js, React, Node.js), we integrate compelling brand narratives with intuitive digital experiences. We ensure your brand connects with the right audience and stands out in the digital space',
    listItems: [
      'Digital Brand Strategy',
      'Visual Brand Identity Design',
      'Interactive Brand Guidelines (built with React)',
    ],
    imageUrl:
      'https://nitsantech.com/blog/fileadmin/ns_theme_ns2019/blog/_live/What_is_the_MERN_stack_and_how_do_I_use_it_/What_is_the_MERN_stack_and_how_do_I_use_it.jpg',
    imageAlt: 'Business card mockup',
  },
  {
    id: '2',
    title: 'Smooth Performance',
    description:
      'We build high-performing, scalable web applications optimized for seamless user experiences. Using the MERN stack (MongoDB, Express.js, React, Node.js), we ensure fast load times, responsive design, and efficient backend operations to deliver smooth, consistent performance across all devices.',
    listItems: [
      'Full-Stack Web Development (MERN)',
      'Optimized Page Load & Rendering',
      'Responsive & Adaptive UI',
      'Real-Time Data Handling',
      'Performance-Driven Architecture',
    ],
    imageUrl:
      'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Web design concept',
  },
  {
    id: '3',
    title: 'SEO Optimization',
    description:
      'Our SEO and optimization services are tailored to improve your website’s visibility, speed, and user engagement. By implementing modern SEO practices and performance tuning—backed by MERN stack technologies—we help your site rank higher on search engines, load faster, and deliver a seamless experience to your audience.',
    listItems: [
      'Technical SEO Implementation',
      'On-Page & Off-Page Optimization',
      'Performance & Speed Enhancements',
      'Keyword & Content Strategy',
      'Analytics & Conversion Tracking',
    ],
    imageUrl:
      'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Marketing Team',
  },
];

const BestServices = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <div id='services' className="bg-white py-16 md:py-8" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-[Inter] font-bold text-gray-800 mb-8 text-center">
          Best Services
        </h2>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
          >
            {/* Text Content Column */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={textVariants}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-semibold text-gray-600">
                  ({String(index + 1).padStart(2, '0')})
                </span>
                <div>
                  <h3 className="text-2xl font-semibold font-[Poppins] text-gray-800 mb-2">{service.title}</h3>
                  <p className="font-[Open_Sans] text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {service.listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="relative overflow-hidden shadow-xl"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={imageVariants}
            >
              <img
                src={service.imageUrl}
                alt={service.imageAlt}
                className="w-full h-auto object-cover"
              />
              {services.imageAlt && (
                <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1 text-sm font-medium text-gray-700">
                  {service.imageAlt}
                </div>
              )}
            </motion.div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestServices;
