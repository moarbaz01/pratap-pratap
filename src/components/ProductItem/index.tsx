interface ProductItemProps {
  url: string;
  title: string;
  tag?: string;
}
const ProductItem: React.FC<ProductItemProps> = ({ url, title, tag }) => {
  return (
    <div className="flex flex-col aspect-square md:max-w-[400px] md:max-h-[400px] max-h-[200px] max-w-[200px]">
      <div className="aspect-square max-h-[200px] bg-orange-50 max-w-[200px] p-4">
        <img src={url} alt="" className="h-full w-full object-contain" />
      </div>
      <p className="text-lg text-center font-bold mt-2">{title}</p>
    </div>
  );
};

export default ProductItem;
