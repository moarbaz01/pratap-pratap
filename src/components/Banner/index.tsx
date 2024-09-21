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
      <div className="flex md:absolute md:bottom-10 md:left-10 items-center md:items-start md:text-start text-center flex-col md:w-1/2 py-6 px-4 md:bg-white rounded-lg gap-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="md:text-lg text-sm">{subtitle}</p>
        <button className="bg-black py-3 px-6 w-fit rounded-lg text-white">
          {buttonLabel}
        </button>
        <p className="text-sm ">{footnote}</p>
      </div>
      <div className="w-full md:hidden px-4">
        <img src={image} className="w-full" alt={title} />
      </div>
    </>
  );
};

export default Banner;
