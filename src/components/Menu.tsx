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
                icon:"/classes.png",
                label:"Classes",
                href:"/classes"
            },
            {
                icon:"/lessons.png",
                label:"Lessons",
                href:"/lessons"
            },
            {
                icon:"/exams.png",
                label:"Exams",
                href:"/exams"
            },
            {
                icon:"/announcements.png",
                label:"Announcements",
                href:"/announcements"
            },
        ]
    }
]
const Menu = () => {

  return (
    <div>
        {menuItems.map(menu=>(
            <div className="" key={menu.title}>
                <h1 className="w-full text-center">{menu.title}</h1>
                {menu.items.map(item=>(
                    <Link href={item.href} key={item.label} className="flex bg-gray-200 my-2 p-1 items-center justify start gap-2 cursor-pointer">
                       <div><Image src="/favicon.ico" alt="" width={20} height={20} /></div>
                       <span className="hidden lg:block text-sm">{item.label}</span>
                    </Link>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Menu