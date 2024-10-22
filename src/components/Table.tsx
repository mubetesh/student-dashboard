
const Table = ({columns,renderRow,data}: {columns:{header:string;accessor:string;className?:string}[]; renderRow:(item:any)=>React.ReactNode; data:any[]}) => {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left font-semibold bg-slate-700 h-14 ">
            {columns.map(col=>(
                <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;