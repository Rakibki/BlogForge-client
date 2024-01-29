import bannerimage from "../../assets/banner.jpeg";
import bannerimage2 from "../../assets/banner2.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="my-6">
      <Carousel autoPlay={true} showArrows={true}>
        <div className="w-full lg:grid items-center grid-cols-2 gap-3 h-screen">
          <div>
            <h1 className="text-5xl mb-4 font-bold">
              Self-observation is the first step of inner unfolding
            </h1>

            <p className="text-lg text-[#2d3350]">
              Mr. Branghton's house is small and inconvenient; though his shop,
              which takes in all the ground floor, is large and commodious. I
              believe I told you before, that he is a silver-smith.
            </p>
          </div>

          <div>
            <img
              className="border-[15px] rounded-2xl"
              src={bannerimage}
              alt=""
            />
          </div>
        </div>

        <div className="w-full lg:grid items-center grid-cols-2 gap-3 h-screen">
          <div>
            <h1 className="text-5xl mb-4 font-bold">
              Self-observation is the first step of inner unfolding
            </h1>

            <p className="text-lg text-[#2d3350]">
              Mr. Branghton's house is small and inconvenient; though his shop,
              which takes in all the ground floor, is large and commodious. I
              believe I told you before, that he is a silver-smith.
            </p>
          </div>

          <div>
            <img
              className="border-[15px] rounded-2xl"
              src={bannerimage2}
              alt=""
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
