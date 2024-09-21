import { CategoryItemType } from "./types";
const CategoryItem: React.FC<CategoryItemType> = ({ name, url }) => {
  return (
    <div className="flex flex-col m-2 items-center justify-center p-4">
      <div className="aspect-square h-[100px] flex items-center justify-center overflow-hidden md:h-[200px] md:w-[200px] bg-gray-100 w-[100px] rounded-full p-4">
        <img src={url} alt="" className="h-[90%] w-[90%] object-contain" />
      </div>
      <p className="md:text-lg text-sm text-center font-bold mt-4">{name}</p>
    </div>
  );
};

export default CategoryItem;
