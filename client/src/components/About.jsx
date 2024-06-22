import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-white">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center mt-8 dark:bg-slate-900 dark:text-white">
            About Our Bookstore
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:bg-slate-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 dark:bg-slate-900 dark:text-white">
              Our mission is to foster a love for reading and to support our
              community of book lovers by offering a diverse selection of books
              and creating a vibrant literary community.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:bg-slate-900 dark:text-white">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 dark:bg-slate-900 dark:text-white">
              Established in 2024, our bookstore has grown from a small local
              shop to a beloved destination for readers both near and far. We
              host regular events, including book signings, readings, and book
              clubs, to connect authors with their readers and to create a
              vibrant literary community.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:bg-slate-900 dark:text-white">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md ">
                <img
                  src="team-member-1.jpg"
                  alt="Team Member 1"
                  className="h-32 w-32 rounded-full mx-auto mb-4 text-black"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center ">
                  Satyajay Dibya
                </h3>
                <p className="text-gray-700 text-center dark:bg-slate-900 dark:text-white">
                  Founder & CEO
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md ">
                <img
                  src="team-member-1.jpg"
                  alt="Team Member 1"
                  className="h-32 w-32 rounded-full mx-auto mb-4 text-black"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center ">
                  Satyajay Dibya
                </h3>
                <p className="text-gray-700 text-center dark:bg-slate-900 dark:text-white">
                  Founder & CEO
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md ">
                <img
                  src="team-member-1.jpg"
                  alt="Team Member 1"
                  className="h-32 w-32 rounded-full mx-auto mb-4 text-black"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center ">
                  Satyajay Dibya
                </h3>
                <p className="text-gray-700 text-center dark:bg-slate-900 dark:text-white">
                  Founder & CEO
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 dark:bg-slate-900 dark:text-white ">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 mb-4 dark:bg-slate-900 dark:text-white">
              We'd love to hear from you! Feel free to reach out with any
              questions, comments, or suggestions.
            </p>
            <p className="text-lg text-gray-700 dark:bg-slate-900 dark:text-white">
              Email:{" "}
              <a
                href="mailto:info@bookstore.com"
                className="text-blue-600 hover:underline"
              >
                satyajaydibya9@gmail.com
              </a>
            </p>
            <p className="text-lg text-gray-700 dark:bg-slate-900 dark:text-white">
              Phone:{" "}
              <a
                href="tel:7024993010"
                className="text-blue-600 hover:underline"
              >
                +91 7024993010
              </a>
            </p>
            <p className="text-lg text-gray-700 dark:bg-slate-900 dark:text-white">
              Address: 123 Book SD, Raipur, SD 12345
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
