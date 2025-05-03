import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(import.meta.env.VITE_BACKENDURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="text-gray-700 body-font relative bg-gray-50">
      <div className="container justify-between mx-auto w-full flex py-24 md:flex-row flex-col items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 w-full mb-10 md:mb-0"
        >
          <h1 className="sm:text-3xl text-2xl font-[Inter] md:text-4xl font-semibold mb-4 text-gray-900 text-center md:text-left">
            Get In Touch
          </h1>
          <p className="leading-relaxed font-[Open_Sans] p-2 mb-8 text-gray-600 text-center md:text-left">
            I'd love to hear from you! Whether you have a question, need assistance, or just want to chat, feel free to reach out using the form below.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 w-full"
        >
          <form onSubmit={handleSubmit} className="bg-white font-[Poppins] p-8 shadow-md">
            <div className="flex flex-wrap -m-2">
              <motion.div
                variants={fadeInUp}
                className="p-2 w-1/2"
              >
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full font-[Open_Sans] bg-gray-100 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition duration-200"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-2 w-1/2"
              >
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-100 font-[Open_Sans] border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition duration-200"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-2 w-full"
              >
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-100 font-[Open_Sans] border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition duration-200 h-32 resize-none"
                  ></textarea>
                </div>
              </motion.div>
            </div>

            <motion.button
              variants={fadeInUp}
              type="submit"
              className={`mt-4 inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 text-lg transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-4 text-sm text-center text-gray-600"
              >
                {submitMessage}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
