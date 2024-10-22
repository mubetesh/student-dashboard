import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, parentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id:number;
  name: string;
  email?:string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
    className:"px-2"
  },
  {
    header: "Students",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const ParentsList = () => {
  const renderRow = (item: Parent) => (
    <tr key={item.id} className="odd:bg-slate-500 even:bg-slate-600">
      <td className="flex items-center justify-start gap-4 py-2 px-2">
       
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p>{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden lg:table-cell">{item?.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="flex items-center justify-center w-7 h-7 bg-lime-400 rounded-full ">
              <Image src="/edit.png" alt="View" width={16} height={16} />
            </button>
          </Link>
          {role==="admin" && (
            <button className="flex items-center justify-center w-7 h-7 bg-red-500 rounded-full ">
              <Image src="/delete.png" alt="View" width={16} height={16}  />
            </button>)}
        </div>
      </td>
    </tr>
  )
  return (
    <div className="bg-slate-800 text-white m-2 rounded-lg p-4">
      {/*TOP*/}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold w-1/4">
          All Parents
        </h1>
        <div className="w-full md:w-auto justify-end flex flex-col md:flex-row items-center gap-4 p-2">
          <TableSearch />
          <div className="flex justify-end items-center gap-2 self-end">
            <button className="h-8 w-8 flex rounded-full items-center justify-center bg-slate-700 ">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="h-8 w-8 flex rounded-full items-center justify-center bg-slate-700">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="h-8 w-8 flex rounded-full items-center justify-center bg-slate-700">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/*LIST*/}
      <div>
        <Table columns={columns} renderRow={renderRow} data={parentsData}/>
      </div>
      {/*PAGINATION*/}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ParentsList;

