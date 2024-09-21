import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import { Link } from "react-router-dom";
import product1 from "../../assets/1.png";
import product2 from "../../assets/2.png";
import product3 from "../../assets/3.png";
import product4 from "../../assets/4.png";
import product5 from "../../assets/5.png";
import product6 from "../../assets/6.png";
import product7 from "../../assets/7.png";
import product8 from "../../assets/8.png";
import product9 from "../../assets/9.png";
import product10 from "../../assets/10.png";
import product11 from "../../assets/11.png";
import product12 from "../../assets/12.png";
import product13 from "../../assets/13.png";
import product14 from "../../assets/14.png";
import Slider from "../../components/Slider";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import Banner from "../../components/Banner";
import useDimensions from "../../hooks/useDimensions";
import PrintingSection from "../../components/PrintingSection";
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
    category: "Business ",
    price: 12.25,
    tag: "20% OFF",
    title: "Build your custom business card",
  },
  {
    url: product2,
    category: "Business Card",
    price: 19.99,
    tag: "New",
    title: "Table Clock",
  },
  {
    url: product3,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Laser Engraving",
  },
  {
    url: product4,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Multipurpose Table Top With Clock",
  },
  {
    url: product5,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Wall Clock",
  },
  {
    url: product6,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Multipurpose Table Top With Pen Stand & Clock",
  },
  {
    url: product7,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Photo Frame",
  },
  {
    url: product8,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Square Table Clock",
  },
  {
    url: product9,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Table Clock With Pen Stand",
  },
  {
    url: product10,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Pen Stand",
  },
  {
    url: product11,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Pen Stand With Pad",
  },
  {
    url: product12,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Mobile Stand With Photo Frame",
  },
  {
    url: product13,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Key Hanger & Clip Board",
  },
  {
    url: product14,
    category: "Flyers & Posters",
    price: 24.99,
    tag: "20% OFF",
    title: "Religious Frame",
  },
];
const bannerData = [
  {
    title: "Exquisite Wedding Invitations",
    subtitle: "Invite Your Loved Ones in Style",
    buttonLabel: "Shop Now",
    footnote: "Starting at Rs. 300",
    image: banner1, // Use an image relevant to wedding invitations
  },
  {
    title: "Watches for Every Occasion",
    subtitle: "Style Meets Functionality",
    buttonLabel: "Explore Now",
    footnote: "From Rs. 1,500 each",
    image: banner2, // Use another relevant watch image
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
              to={""}
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
      <div className="py-12 px-4 md:px-6">
        <h1 className="md:text-4xl text-2xl font-bold">
          Our Most Popular Products
        </h1>
        <Slider smallScreenSlide={2}>
          {productsData.map((item, index) => (
            <div className="p-2" key={index}>
              <ProductCard {...item} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Products */}
      <div className="py-12 px-4 md:px-6 bg-gray-50">
        <h1 className="text-2xl md:text-4xl font-bold">New Arrivals</h1>
        <div className="grid md:grid-cols-6 mt-6 grid-cols-2 gap-4">
          {productsData.map((item, index) => (
            <ProductCard key={index + item.title} {...item} />
          ))}
        </div>
      </div>
      {/* Products */}
      <div className="py-12 px-4 md:px-6">
        <h1 className="text-2xl md:text-3xl font-bold">Trending Products</h1>
        <Slider smallScreenSlide={2}>
          {productsData.map((item, index) => (
            <div className="p-2" key={index}>
              <ProductCard {...item} url={item.url} />
            </div>
          ))}
        </Slider>
      </div>

      <PrintingSection />

      {/* `Banners */}
      <div className="py-8">
        <div className="flex items-center md:flex-row flex-col gap-2">
          {bannerData.map((item, index) => (
            <div
              className="md:w-1/2 w-full md:h-[50vh] py-8 bg-gray-50 md:bg-none bg-blend-darken md:relative bg-cover bg-center"
              style={{
                backgroundImage: `url(${width > 420 ? item.image : ""})`,
              }}
              key={index}
            >
              <div className="md:absolute md:top-0 md:left-0 md:w-full md:h-full bg-black/40 opacity-50"></div>
              <Banner {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Blog */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left Section - Text Content */}
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-4xl font-extrabold text-green-700 mb-6">
              Welcome to the World of Printing
            </h2>
            <div className="text-lg leading-relaxed text-gray-700">
              <p>
                For the past 20 years, we have been helping business owners and
                individuals in India create their identity. With our
                high-quality products, you can achieve the best designs and
                professional marketing for your business. We offer the most
                affordable and high-quality solutions for digital and flex
                printing.
              </p>
            </div>
          </div>

          {/* Right Section - Features */}
          <div className="lg:w-1/2 lg:pl-7 pt-6 sm:pt-2">
            <div className="mb-7">
              <h3 className="text-xl font-semibold text-orange-600">
                Affordable Printing for Low Quantities
              </h3>
              <div className="text-base text-gray-600 mt-2">
                <p>
                  We provide services at affordable rates for low-quantity
                  printing as well.
                </p>
              </div>
            </div>

            <div className="mb-7">
              <h3 className="text-xl font-semibold text-orange-600">
                High-Quality Products and Easy Design
              </h3>
              <div className="text-base text-gray-600 mt-2">
                <p>
                  Our wide range of high-quality products and online design
                  tools make it easy to customize and order your favorite
                  products.
                </p>
              </div>
            </div>

            <div className="mb-7">
              <h3 className="text-xl font-semibold text-orange-600">
                Free Replacement or Full Refund
              </h3>
              <div className="text-base text-gray-600 mt-2">
                <p>
                  We guarantee every product we sell. If you are not satisfied,
                  we will make it right.
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
