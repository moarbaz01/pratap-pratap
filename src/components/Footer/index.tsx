import React from "react";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Business Cards", url: "/business-cards" },
        { name: "Flyers & Posters", url: "/flyers-posters" },
        { name: "Custom Mugs", url: "/custom-mugs" },
        { name: "T-Shirts & Apparel", url: "/tshirts-apparel" },
        { name: "Banners", url: "/banners" },
        { name: "Stickers", url: "/stickers" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about-us" },
        { name: "Careers", url: "/careers" },
        { name: "Contact", url: "/contact" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", url: "/help" },
        { name: "Returns", url: "/returns" },
        { name: "Shipping Info", url: "/shipping" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto flex flex-wrap justify-around">
        {footerLinks.map((section, index) => (
          <div key={index} className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-3 border-b border-gray-600 pb-2">
              {section.title}
            </h4>
            <ul className="list-none p-0">
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={link.url}
                    className="hover:text-blue-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Follow us on
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:underline ml-1"
          >
            Twitter
          </a>
          ,
          <a
            href="https://facebook.com"
            className="text-blue-400 hover:underline mx-1"
          >
            Facebook
          </a>
          , and
          <a
            href="https://instagram.com"
            className="text-blue-400 hover:underline mx-1"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
