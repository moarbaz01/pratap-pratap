import heroImage from "../../assets/heroImage.jpg";
const Hero = () => {
  return (
    <>
      <div className="bg-orange-50 py-12 md:px-6 px-4 md:h-[60vh] w-full">
        <div className="flex items-center md:flex-row flex-col justify-between h-full">
          <div className="flex-[1] flex flex-col md:pr-6">
            <h1 className="xl:text-6xl md:text-4xl text-3xl font-bold text-black md:text-gray-900">
              Create, Customize, and Print with Ease!
            </h1>

            <p className="text-xl md:w-3/4 mt-4 text-gray-700">
              From business cards to banners, we bring your ideas to life with
              professional, high-quality prints.
            </p>
            <button className="py-2 w-fit mt-8 bg-orange-400 transition hover:bg-transparent hover:text-black text-white px-8 border border-orange-400 rounded-full">
              Shop
            </button>
          </div>
          <div className="flex items-center justify-center md:mt-0 mt-4 flex-[1] h-[90%] aspect-square">
            <img
              src={heroImage}
              className="h-full md:rounded-md rounded-tl-[50%] rounded-br-3xl w-full object-cover"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
