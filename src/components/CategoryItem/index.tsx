import { CategoryItemType } from "./types";
const CategoryItem: React.FC<CategoryItemType> = ({ name, url }) => {
  return (
    <div className="flex flex-col max-w-[200px] md:max-h-[400px] items-center justify-center md:max-w-[400px] max-h-[200px] aspect-square p-4">
      <div className="aspect-square max-h-[200px] bg-orange-50 max-w-[200px] rounded-full p-4">
        <img src={url} alt="" className="h-full w-full object-contain" />
      </div>
      <p className="text-lg text-center font-bold mt-2">{name}</p>
    </div>
  );
};

export default CategoryItem;
