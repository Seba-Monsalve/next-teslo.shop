'use client'

import { titleFont } from "@/config/font"
import { useCartStore, useUIStore } from "@/store"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoSearchCircleOutline, IoCartOutline } from 'react-icons/io5'

export const TopMenu = () => {
    const { openSideMenu } = useUIStore();
    const { getTotalItems } = useCartStore()

    const [isLoaded, setisLoaded] = useState(false)
    const itemsInCart = getTotalItems();

    useEffect(() => {
        setisLoaded(true)
    }, [])


    return (
        <nav className="flex px-5 justify-between w-full items-center">
            <div>
                <Link href={"/"} >
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                    <span>| Shop</span>
                </Link>
            </div>

            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-700" href={"/gender/men"}>Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-700" href={"/gender/women"}>Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-700" href={"/gender/kid"}>Niños</Link>
            </div>
            {/* SEACRH CART MENU */}

            <div className="flex items-center">
                <Link href='/search'>
                    <IoSearchCircleOutline className="w-10 h-10" />
                </Link>

                <Link 
                
                href=
                {
                    itemsInCart==0? '/empty':                    '/cart'
                }>
                    <div className="relative ">

                        {
                            (isLoaded && itemsInCart > 0) &&
                            <span className="absolute text-xs rounded-full px-1  font-bold  bg-blue-400 right-1 text-gray-100" >{itemsInCart}</span>
                        }
                        <IoCartOutline className="w-10 h-10" />
                    </div>
                </Link>

                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-700"
                    onClick={() => openSideMenu()}
                >
                    Menu
                </button>
            </div>
        </nav>
    )
}
