import Slider from "../Slider";
import logo from "../../assets/logo.png";
import { SwiperSlide } from "swiper/react";
import CategoryItem from "../CategoryItem";
const data: { name: string; url: string }[] = [
  {
    name: "Text Tiles",
    url: logo,
  },
  {
    name: "Text Tiles",
    url: logo,
  },
  {
    name: "Text Tiles",
    url: logo,
  },
  {
    name: "Text Tiles",
    url: logo,
  },
  {
    name: "Text Tiles",
    url: logo,
  },
];

const Categories: React.FC<any> = () => {
  return (
    <div className="py-12 px-6">
      <h1 className=" text-center text-xl font-bold">Explore All Categories</h1>
      <div className="mt-6">
        <Slider>
          {data.map((item, index) => (
            <SwiperSlide className="" key={index}>
              <CategoryItem name={item.name} url={item.url} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Categories;
