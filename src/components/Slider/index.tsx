import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

interface SliderFuncProps {
  children: React.ReactNode[];
}
const Slider: React.FC<SliderFuncProps> = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);
  return (
    <Swiper
      slidesPerView={dimensions.width < 420 ? 2 : 5}
      spaceBetween={25}
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};

export default Slider;
