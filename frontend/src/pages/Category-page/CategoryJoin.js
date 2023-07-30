import React from "react";
import Navbar from "../../components/Navbar-landing/Navbar";
import Footer from "../../components/Footer/Footer";
import Category from "./Category";

const CategoryJoin = () => {
  return (
    <>
      <div className="bg-white flex items-center flex-col">
        <Navbar />
        <Category/>
      </div>
      <Footer />
    </>
  );
};

export default CategoryJoin;
