import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import { Link } from "react-router-dom";
import product1 from "../../assets/2.jpg";
import product2 from "../../assets/heroImage.jpg";
import product3 from "../../assets/4.jpg";
import Slider from "../../components/Slider";
import ProductCard from "../../components/ProductCard";
import { SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer";
const navCategories: { name: string; link: string }[] = [
  {
    name: "All",
    link: "/business-cards",
  },
  {
    name: "Business Cards",
    link: "/business-cards",
  },
  {
    name: "Flyers & Posters",
    link: "/flyers-posters",
  },
  {
    name: "Custom Mugs",
    link: "/custom-mugs",
  },
  {
    name: "T-Shirts & Apparel",
    link: "/tshirts-apparel",
  },
  {
    name: "Banners",
    link: "/banners",
  },
  {
    name: "Stickers",
    link: "/stickers",
  },
  {
    name: "Calendars",
    link: "/calendars",
  },
  {
    name: "Brochures",
    link: "/brochures",
  },
  {
    name: "Promotional Products",
    link: "/promotional-products",
  },
  {
    name: "Signs",
    link: "/signs",
  },
];

const productsData = [
  {
    url: product1,
    category: "Business Card",
    price: 12.25,
    tag: "20% OFF",
    title: "Build your custom business card",
  },
  {
    url: product2,
    category: "Business Card",
    price: 19.99,
    tag: "New",
    title: "Business Card",
  },
  {
    url: product3,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Custom Flyer",
  },
  {
    url: product1,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Custom Flyer",
  },
  {
    url: product2,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Custom Flyer",
  },
  {
    url: product2,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Custom Flyer",
  },
];

const Home = () => {
  return (
    <div>
      {/* Nav Links */}
      <div className="py-4 px-6">
        <div className="md:flex items-center hidden gap-4">
          {navCategories.map((item) => (
            <Link
              to={item.link}
              className="text-lg hover:text-orange-500 transition  mr-4"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <Hero />
      <Categories />
      {/* Products */}
      <div className="py-12 px-6">
        <h1 className="text-3xl font-bold">Popular Products</h1>
        <Slider smallScreenSlide={1}>
          {productsData.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard {...item} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      {/* Products */}
      <div className="py-12 px-6">
        <h1 className="text-3xl font-bold">Trending Products</h1>
        <Slider smallScreenSlide={1}>
          {productsData.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard {...item} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
