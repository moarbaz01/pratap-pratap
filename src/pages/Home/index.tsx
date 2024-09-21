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
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import Banner from "../../components/Banner";
import useDimensions from "../../hooks/useDimensions";
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
const bannerData = [
  {
    title: "High Quality Personalized Polos",
    subtitle: "Wear your Brand with Pride",
    buttonLabel: "Shop Now",
    footnote: "1 Starting at Rs. 550",
    image: banner2,
  },
  {
    title: "Custom Winter Wear",
    subtitle: "Showcase your brand with custom winter wear.",
    buttonLabel: "Shop Now",
    footnote: "1 Starting at Rs. 730",
    image: banner1,
  },
];

const Home = () => {
  const { width } = useDimensions();
  return (
    <div>
      {/* Nav Links */}
      <div className="py-4 hidden md:block px-6">
        <div className="flex items-center categoriesLinks sm:overflow-x-scroll gap-4">
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

      {/* `Banners */}
      <div className="py-12">
        <div className="flex items-center md:flex-row flex-col gap-2">
          {bannerData.map((item, index) => (
            <div
              className="md:w-1/2 w-full md:h-[50vh] py-4 bg-green-50 md:bg-none md:relative bg-cover bg-center"
              style={{
                backgroundImage: `url(${width > 420 ? item.image : ""})`,
              }}
              key={index}
            >
              <Banner {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Blog */}
      <div className="bg-orange-50 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-bold">
              VistaPrint India: The leader in customization
            </h2>
            <div className="text-base mt-7">
              For more than 20 years, VistaPrint has helped business owners,
              entrepreneurs, and individuals create their identities with custom
              designs and professional marketing. Our online printing services
              are intended to help you find high-quality customized products you
              need – visiting cards, personalized clothing, gifting products,
              and much more.
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-7 pt-6 sm:pt-2">
            <div className="mb-7">
              <h3 className="text-lg font-bold">
                Even Low Quantities @ Best Prices
              </h3>
              <div className="text-base">
                <p>
                  We offer low/single product quantities at affordable prices.
                </p>
              </div>
            </div>
            <div className="mb-7">
              <h3 className="text-lg font-bold">
                High quality products and Easy design
              </h3>
              <div className="text-base">
                <p>
                  Our wide selection of high-quality products and online design
                  tools make it easy for you to customize and order your
                  favorite products.
                </p>
              </div>
            </div>
            <div className="mb-7">
              <h3 className="text-lg font-bold">
                Free replacement or Full Refund
              </h3>
              <div className="text-base">
                <p>
                  We stand by everything we sell. So if you’re not satisfied,
                  we’ll make it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
