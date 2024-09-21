import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import poster from "../../assets/poster.jpeg";
import textLogo from "../../assets/textLogo.png";

const PrintingSection = () => {
  return (
    <section className="bg-gray-100 py-12 md:px-6 px-4 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-2">
          India’s Most Popular Printer
        </h1>
        {/* <p className="text-lg lg:text-2xl text-gray-600">प्रताप एंड प्रताप</p> */}
        <div className="text-center h-10 ">
          <img src={textLogo} className="h-full w-full object-contain" alt="" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-12 ">
        {/* Left Section - Image and Prices */}
        <div className="relative w-full">
          <img
            src={poster} // Update the path to the actual image
            alt="Printing Machine"
            className="w-full h-[350px] lg:h-[500px] object-contain rounded-lg"
          />
        </div>

        {/* Right Section - Contact Info */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
            Contact Information
          </h3>
          <ul className="space-y-6">
            {/* Phone Numbers */}
            <li className="flex items-center text-lg text-gray-700">
              <FaPhoneAlt className="text-green-500 mr-3" />
              <span>+91 83878-11111 / +91 94141-40111</span>
            </li>

            {/* Emails */}
            <li className="flex items-center text-lg text-gray-700">
              <FaEnvelope className="text-red-500 mr-3" />
              <span>pratapandpratap@gmail.com</span>
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <FaEnvelope className="text-red-500 mr-3" />
              <span>pratapnpratap111@gmail.com</span>
            </li>

            {/* Website */}
            <li className="flex items-center text-lg text-gray-700">
              <FaEnvelope className="text-blue-500 mr-3" />
              <span>pratapandpratap.com</span>
            </li>

            {/* Address */}
            <li className="flex items-center text-lg text-gray-700">
              <FaMapMarkerAlt className="text-yellow-500 mr-3" />
              <span>23, Modern Market, Bikaner (Rajasthan)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrintingSection;
