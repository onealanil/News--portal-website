// import HeroSubs from "./HeroSubs";
import Slider from "./Slider";
import { Fade } from "react-awesome-reveal";


function Hero() {
  return (
    <>
    <div className="w-[100%] flex items-center justify-center mt-20">
      <div className="w-[90%] xl:w-[90%] 2xl:w-[80%]">
        <div className="w-[100%] md:p-4 flex flex-col space-y-4 m-4">
          {/* hero header */}
          <Fade>
          <div className="w-[100%] h-[2rem] text-dark font-bold text-2xl">
            <h1>Trending</h1>
          </div>
          </Fade>
          <Slider />
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
