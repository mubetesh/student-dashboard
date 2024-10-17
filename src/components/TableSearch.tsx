import Image from "next/image";
const TableSearch = () => {
  return (
    <div className="w-full">
      <div className="flex w-full md:w-auto justify-start items-center gap-2 text-sm rounded-full ring-[1px] ring-gray py-1 px-2">
        <div className="rounded-full">
          <Image src="/search.png" alt="" width={20} height={20} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="p-1 bg-transparent  outline-none text-gray-300"
        />
      </div>
    </div>
  );
};

export default TableSearch;
