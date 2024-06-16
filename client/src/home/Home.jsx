import React from "react";
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBook from '../components/FreeBook'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white"> 

      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </div>
    </>
  );
};

export default Home;
