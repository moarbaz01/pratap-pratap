import Slider from "react-slick";
import useDimensions from "../../hooks/useDimensions";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyle.css"; // Custom styles
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SliderFuncProps {
  children: React.ReactNode[];
  smallScreenSlide?: number;
}

interface ArrowProps {
  onClick?: () => void;
  icon: React.ReactNode;
  position?: "left" | "right"; // Handle left or right position dynamically
}

const Arrow: React.FC<ArrowProps> = ({ onClick, icon, position = "right" }) => {
  return (
    <div
      className={`bg-white border border-gray-400 shadow-sm absolute z-10 md:p-8 md:text-2xl p-3 flex items-center justify-center text-lg text-gray-500 rounded-md cursor-pointer
        ${
          position === "left" ? "-left-2" : "-right-2"
        } top-1/2 transform -translate-y-1/2`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

const CustomSlider: React.FC<SliderFuncProps> = ({
  children,
  smallScreenSlide = 2,
}) => {
  const { width } = useDimensions();
  const [totalSlides, setTotalSlides] = useState(6);

  useEffect(() => {
    if (width >= 1080) {
      setTotalSlides(6);
    } else if (width >= 720) {
      setTotalSlides(4);
    } else if (width >= 420) {
      setTotalSlides(3);
    } else {
      setTotalSlides(smallScreenSlide);
    }
  }, [width]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: totalSlides,
    slidesToScroll: totalSlides,
    nextArrow: <Arrow icon={<FaArrowRight />} />, // Hide next arrow
    prevArrow: <Arrow position="left" icon={<FaArrowLeft />} />, // Hide prev arrow
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container py-6">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CustomSlider;
