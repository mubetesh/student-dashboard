

const announcements = [
    {
        id:1,
        title: "Lorem",
        description: "Animi inventore nemo fugiat doloremque",
        time:"2:00 PM-4:00 PM",
    },
    {
        id:2,
        title: "Epsum",
        description: "Neque ipsum culpa iure et!",
        time:"6:00 PM-9:00 PM",
    },
    {
        id:3,
        title: "Dolor",
        description: "veniam sequi fugiat totam delectus?",
        time:"8:00 PM-11:00 PM",
    },
]

const Announcements = () => {
  return (
    <div>
        <div className="flex flex-col gap-4 my-4">
      <div className="flex justify-between">
        <h1 className="text-gray-400 font-bold">Announcements</h1>
        <span className="text-gray-300 text-sm px-2" >View All</span>
      </div>
        {announcements.map((announcement) => (
          <div key={announcement.id} className=" p-2 border-slate-500 border-r-2 odd:bg-blue-300 even:bg-green-300 border-t-2 rounded-md ">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-slate-600 text-md" >{announcement.title}</h2>
              <p className="font-semibold text-slate-600 text-xs" >{announcement.time}</p>
            </div>
            <div>
              <p className="mt-1 text-slate-700 text-sm ">{announcement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements