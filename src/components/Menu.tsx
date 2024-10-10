import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
    {
        title:"Menu",
        items: [
            {
                icon:"/home.png",
                label:"Home",
                href:"/"
            },
            {
                icon:"/teacher.png",
                label:"Teacher",
                href:"/teacher"
            },
            {
                icon:"/student.png",
                label:"Student",
                href:"/student"
            },
            {
                icon:"/parent.png",
                label:"Parent",
                href:"/parent"
            },
            {
                icon:"/class.png",
                label:"Classes",
                href:"/classes"
            },
            {
                icon:"/lesson.png",
                label:"Lessons",
                href:"/lessons"
            },
            {
                icon:"/exam.png",
                label:"Exams",
                href:"/exams"
            },
            {
                icon:"/announcement.png",
                label:"Announcements",
                href:"/announcements"
            },
        ]
    }
]
const Menu = () => {

  return (
    <div className='my-2'>
        {menuItems.map(menu=>(
            <div className="flex flex-col justify-center lg:justify-start items-center w-full" key={menu.title}>
                <h1 className="w-full text-center text-gray-400 font-bold">{menu.title}</h1>
                {menu.items.map(item=>(
                    <Link href={item.href} key={item.label} className="flex w-8 lg:w-full bg-slate-800 my-1 p-1  items-center lg:justify-start gap-2 cursor-pointer">
                       <div><Image src={item.icon} alt="" width={20} height={20} /></div>
                       <span className="hidden text-gray-300 lg:block text-sm">{item.label}</span>
                    </Link>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Menu