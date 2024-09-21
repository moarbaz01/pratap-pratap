import Slider from "../Slider";
import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";
import cat4 from "../../assets/cat4.png";
import cat5 from "../../assets/cat5.png";
import cat6 from "../../assets/cat6.png";
import cat7 from "../../assets/cat7.png";
import cat8 from "../../assets/cat8.png";
import CategoryItem from "../CategoryItem";

//
const data: { name: string; url: string }[] = [
  {
    name: "Calenders",
    url: cat1,
  },
  {
    name: "Clock",
    url: cat2,
  },
  {
    name: "Laser Ingraving",
    url: cat3,
  },
  {
    name: "Mobile Stand",
    url: cat4,
  },
  {
    name: "Photo Frame",
    url: cat5,
  },
  {
    name: "Pen Stand",
    url: cat6,
  },
  {
    name: "Table Clock",
    url: cat7,
  },
  {
    name: "Clip Board",
    url: cat8,
  },
];

const Categories: React.FC<any> = () => {
  return (
    <div className="md:py-12 py-6 px-6">
      <h1 className="md:text-4xl text-2xl font-bold">Explore All Categories</h1>
      <div className="mt-2">
        <Slider smallScreenSlide={3}>
          {data.map((item, index) => (
            <CategoryItem
              key={index + item.name}
              name={item.name}
              url={item.url}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Categories;
