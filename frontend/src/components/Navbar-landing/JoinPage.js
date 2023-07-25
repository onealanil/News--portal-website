import Navbar from "./Navbar";
import Hero from "./HeroSection";


function Join() {
  return (
    // this is the main code for the responsive width 
    <div className="bg-white flex items-center flex-col ">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Join;