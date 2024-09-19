import { CategoryItemType } from "./types";
const CategoryItem: React.FC<CategoryItemType> = ({ name, url }) => {
  return (
    <div className="flex flex-col max-w-[200px] md:max-h-[400px] items-center justify-center md:max-w-[400px] max-h-[200px] aspect-square p-4 bg-orange-50">
      <div className="aspect-square max-h-[200px] w-full rounded-md p-2">
        <img src={url} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="w-full">
        <p className="text-lg font-bold mt-2">{name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
