import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
        <Navbar />
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full mt-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contact Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
          We'd love to hear from you! Feel free to reach out with any questions, comments, or suggestions.
        </p>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h2>
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-2" />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Email: <a href="mailto:satyajaydibya9@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">satyajaydibya9@gmail.com</a>
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <FaPhone className="text-blue-600 dark:text-blue-400 mr-2" />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Contact Number: <a href="tel:+917024993010" className="text-blue-600 dark:text-blue-400 hover:underline">+91 7024993010</a>
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <FaLinkedin className="text-blue-600 dark:text-blue-400 mr-2" />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              LinkedIn: <a href="https://www.linkedin.com/in/satyajay01" className="text-blue-600 dark:text-blue-400 hover:underline">satyajay01</a>
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <FaInstagram className="text-blue-600 dark:text-blue-400 mr-2" />
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Instagram: <a href="https://www.instagram.com/satyajay_01/" className="text-blue-600 dark:text-blue-400 hover:underline">satyajay_01</a>
            </p>
          </div>
        </div>
      </div>
        <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas labore culpa <br /> suscipit dolorem mollitia voluptatum optio recusandae non voluptatibus repellendus, libero rerum tempora illo deleniti dolor porro nobis molestias.</p>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
