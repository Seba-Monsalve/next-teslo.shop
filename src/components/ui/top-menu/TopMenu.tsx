'use client'

import { titleFont } from "@/config/font"
import { useUIStore } from "@/store"
import Link from "next/link"
import { IoSearchCircleOutline, IoCartOutline } from 'react-icons/io5'

export const TopMenu = () => {
    const {openSideMenu} = useUIStore()

    return (
        <nav className="flex px-5 justify-between w-full items-center">
            <div>
                <Link href={"/"} >
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                    <span>| Shop</span>
                </Link>
            </div>

            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-700" href={"/category/men"}>Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-700" href={"/category/women"}>Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-700" href={"/category/kid"}>Niños</Link>
            </div>
            {/* SEACRH CART MENU */}

            <div className="flex items-center">
                <Link href='/search'>
                    <IoSearchCircleOutline className="w-10 h-10" />
                </Link>

                <Link href='/cart'>
                    <div className="relative ">
                        <span className="absolute text-xs rounded-full px-1  font-bold  bg-blue-400 right-1 text-gray-100" >3</span>
                        <IoCartOutline className="w-10 h-10" />
                    </div>
                </Link>

                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-700"
                onClick={()=>openSideMenu()}
                >
                    Menu
                </button>
            </div>
        </nav>
    )
}
