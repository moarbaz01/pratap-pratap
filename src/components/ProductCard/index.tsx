interface ProductCardProps {
  url: string;
  category: string;
  price: number;
  tag?: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  url,
  category,
  price,
  tag,
  title,
}) => {
  return (
    <div className="bg-white shadow rounded-lg relative">
      <div className="aspect-square flex items-center justify-center md:max-h-[400px] p-2 w-full">
        <img src={url} alt="" className="w-full object-contain" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{category}</h2>
        <p className="text-gray-600">{title}</p>
        {/* <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">${price}</span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div> */}
      </div>
      <div className="bg-green-300 absolute left-1 top-1 py-1 px-2">{tag}</div>
    </div>
  );
};

export default ProductCard;
