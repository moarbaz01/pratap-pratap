import heroImage from "../../assets/heroImage.jpg";

const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-12 md:px-6 px-4 md:h-[70vh] w-full">
        <div className="flex items-center md:flex-row flex-col justify-between h-full">
          {/* Left Section - Text */}
          <div className="flex-1 flex flex-col md:pr-6">
            <p className="text-xl text-green-600 font-medium">
              Welcome to the Best in Printing Solutions!
            </p>
            <h1 className="xl:text-6xl md:text-5xl mt-2 text-3xl font-extrabold text-green-800">
              Print Your Ideas with Precision and Quality
            </h1>

            <p className="text-lg md:w-3/4 mt-4 text-gray-600">
              We offer affordable and high-quality prints, from business cards
              to large banners. Customize and print with ease at the best rates.
            </p>
            <button className="py-4 w-fit font-bold mt-8 bg-orange-500 transition hover:bg-transparent hover:text-orange-500 text-white md:px-12 px-8 border border-orange-500 rounded-full">
              Get Started
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="flex items-center justify-center md:mt-0 mt-6 flex-1 h-[90%]">
            <img
              src={heroImage}
              className="h-full md:rounded-lg rounded-tl-[30%] rounded-br-3xl w-full object-cover shadow-xl"
              alt="Printing Solutions"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
