import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
