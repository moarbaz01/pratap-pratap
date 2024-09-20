import Slider from "../Slider";
import logo from "../../assets/logo.png";
import { SwiperSlide } from "swiper/react";
import CategoryItem from "../CategoryItem";

//
const data: { name: string; url: string }[] = [
  {
    name: "Business Cards",
    url: logo,
  },
  {
    name: "Flyers & Posters",
    url: logo,
  },
  {
    name: "Custom Mugs",
    url: logo,
  },
  {
    name: "T-Shirts & Apparel",
    url: logo,
  },
  {
    name: "Banners",
    url: logo,
  },
  {
    name: "Stickers",
    url: logo,
  },
  {
    name: "Calendars",
    url: logo,
  },
];

const Categories: React.FC<any> = () => {
  return (
    <div className="py-12 px-6">
      <h1 className="md:text-2xl text-xl font-bold">Explore All Categories</h1>
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
