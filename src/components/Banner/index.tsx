interface BannerProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  footnote: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  buttonLabel,
  footnote,
  image,
}) => {
  return (
    <>
      <div className="flex md:absolute md:bottom-10 md:left-10 items-center md:items-start md:text-start text-center flex-col md:w-3/4 lg:w-2/3 md:py-6 px-4 md:bg-white rounded-lg gap-4 md:shadow-lg">
        <h1 className="text-3xl font-bold text-orange-600">{title}</h1>
        <p className="md:text-lg text-lg text-green-600">{subtitle}</p>
        <button className="bg-orange-500 py-3 px-6 w-fit rounded-md text-white hover:bg-orange-600">
          {buttonLabel}
        </button>
        <p className="text-sm text-gray-700">{footnote}</p>
      </div>
      <div className="w-full md:hidden px-4 mt-6">
        <img src={image} className="w-full rounded-lg" alt={title} />
      </div>
    </>
  );
};

export default Banner;
