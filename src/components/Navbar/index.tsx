import {
  CiCircleQuestion,
  CiFolderOn,
  CiMenuFries,
  CiSearch,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import logo from "../../assets/logo.png";
import textLogo from "../../assets/textLogo.png";
const Navbar = () => {
  return (
    <div className="bg-white shadow-sm py-4 md:h-24 h-20 px-6">
      <div className="flex items-center justify-between h-full gap-6">
        <div className="flex items-center md:hidden gap-4">
          <CiMenuFries className="text-2xl md:text-2xl stroke-[0.2px]" />
          <CiSearch className="text-2xl md:text-2xl stroke-[0.2px]" />
        </div>
        <div className="flex items-center justify-center h-12 md:flex-row flex-col gap-1 md:pr-4">
          <img
            src={logo}
            className=" h-8 md:h-16 w-auto"
            alt="Pratap And Pratap"
          />
          <img
            src={textLogo}
            className=" h-3 md:h-8 w-auto"
            alt="Pratap And Pratap"
          />
        </div>
        <div className="hidden items-center flex-[4] justify-between border md:flex border-gray-400 rounded-full py-2 px-6">
          <input
            type="text"
            name="search"
            className="outline-none w-full text-lg "
            placeholder="Search"
          />
          <CiSearch className="text-xl stroke-[1px] text-gray-500 cursor-pointer hover:opacity-80 transition" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center cursor-pointer md:hidden lg:flex hover:opacity-80 transition gap-2">
            <CiCircleQuestion className="text-2xl md:text-xl stroke-[0.2px]" />
            <p className="text-md font-[400] hidden lg:block">Help is here</p>
          </div>
          <div className="md:flex items-center cursor-pointer hidden hover:opacity-80 transition gap-2">
            <CiUser className="text-2xl md:text-xl stroke-[0.2px]" />
            <p className="text-md font-[400] hidden lg:block">Sign In</p>
          </div>
          {/* <div className="md:flex items-center cursor-pointer hidden hover:opacity-80 transition gap-2">
            <CiFolderOn className="text-2xl md:text-xl stroke-[0.2px]" />
            <p className="text-md font-[400] hidden lg:block">My Projects</p>
          </div> */}
          <div className="md:flex items-center cursor-pointer hover:opacity-80 transition gap-2">
            <CiShoppingCart className="text-3xl md:text-" />
            <p className="text-md font-[400] hidden lg:block">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
