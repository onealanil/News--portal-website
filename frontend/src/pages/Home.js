import React from "react";
import Join from "../components/Navbar-landing/JoinPage";
import LandingJoin from "../components/Landing-news-section/LandingJoin";
import FeatureSection from "../components/Features/FeatureSection";
import MoreNews from "../components/Features/MoreNews";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* navbar and landing slider  */}
      <Join />
      <LandingJoin />
      <div className="w-full flex items-center justify-center">
        <div className="w-[90%] xl:w-[85%] 2xl:w-[70%]">
          <FeatureSection />
          <MoreNews />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
