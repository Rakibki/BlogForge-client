import bannerimage from "../../assets/banner.jpeg";

const Banner = () => {
  return (
    <div className="w-full grid items-center grid-cols-2 h-screen">
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
        <img className="border-[15px] rounded-2xl" src={bannerimage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
