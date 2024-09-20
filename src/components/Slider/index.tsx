import { Autoplay, Pagination, Scrollbar } from "swiper/modules"; // Import modules
import { Swiper } from "swiper/react";
import useDimensions from "../../hooks/useDimensions";
import { useEffect, useState } from "react";
import "./sliderStyle.css";

interface SliderFuncProps {
  children: React.ReactNode[];
  smallScreenSlide?: number;
}

const Slider: React.FC<SliderFuncProps> = ({
  children,
  smallScreenSlide = 2,
}) => {
  const { width } = useDimensions();
  const [totalSlides, setTotalSlides] = useState(5);

  useEffect(() => {
    if (width >= 1080) {
      setTotalSlides(5);
    } else if (width >= 720) {
      setTotalSlides(4);
    } else if (width >= 420) {
      setTotalSlides(3);
    } else {
      setTotalSlides(smallScreenSlide);
    }
  }, [width]);

  return (
    <Swiper
      slidesPerView={totalSlides}
      spaceBetween={25}
      loop={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      modules={[Pagination, Autoplay, Scrollbar]} // Add modules
      className="py-6" // Position relative for proper arrow positioning
    >
      {children}
      <div className="swiper-pagination -bottom-20 absolute"></div>
    </Swiper>
  );
};

export default Slider;
