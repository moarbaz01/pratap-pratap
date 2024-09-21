interface ProductCardProps {
  url: string;
  category: string;
  price: number;
  tag?: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ url, tag, title }) => {
  console.log(url);
  return (
    <div className=" relative md:h-[350px] rounded-md border cursor-pointer hover:bg-gray-100 transition px-2 py-4 h-[200px]">
      <div className="h-[80%] md:h-[75%]">
        <img
          src={url}
          alt={title}
          className="rounded-t-lg h-full object-contain w-full"
        />
      </div>
      <h3 className="md:text-lg mt-6 text-sm font-semibold truncate">
        {title}
      </h3>
      {tag && (
        <div className="bg-green-500 font-bold text-white rounded-tl-xl rounded-br-lg absolute left-1 top-1 py-1 px-3 text-sm shadow-md">
          {tag}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
