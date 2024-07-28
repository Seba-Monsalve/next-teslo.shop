'use client'
import { useUIStore } from '@/store';
import clsx from 'clsx';
import Link from 'next/link';
import { IoCloseOutline, IoSearchCircleOutline, IoPersonOutline, IoTicketOutline, IoLogOutOutline, IoShirtOutline, IoPeopleOutline } from 'react-icons/io5';

export const Sidebar = () => {

    const { isSideMenuOpen,closeSideMenu } = useUIStore()
    return (

        <div>
            {isSideMenuOpen &&
                <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
            }
            {isSideMenuOpen &&
                <div className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm' />
            }


            <nav className={clsx("fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300", { "translate-x-full": !isSideMenuOpen })}>
                <IoCloseOutline
                    color='black'
                    size={50} className='absolute top-5 right-5 cursor-pointer'
                    onClick={() => closeSideMenu()}
                />
                <div className='relative mt-14  '>
                    <IoSearchCircleOutline
                        color='black'
                        size={30} className='absolute  left-1' />
                    <input type="text"
                        className='w-full bg-gray-50 rounded pl-10 pr-10 border-b-2 text-xl border-e-gray-200 focus:outline focus:border-blue-500'
                        placeholder='Buscar' />
                </div>

                <Link href={''}
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoPersonOutline size={30} color='black' />
                    <span className='ml-3 text-xl text-black'>Perfil</span>
                </Link>
                <Link href={''}
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoTicketOutline size={30} color='black' />
                    <span className='ml-3 text-xl text-black'>Ordenes</span>
                </Link>
                <Link href={''}
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoLogOutOutline size={30} color='black' />
                    <span className='ml-3 text-xl text-black'>Salir</span>
                </Link>
                <div className=' w-full h-px bg-gray-200 my-10'></div>
                <Link href={''}
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoShirtOutline size={30} color='black' />
                    <span className='ml-3 text-xl text-black'>Productos</span>
                </Link>
                <Link href={''}
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoTicketOutline size={30} color='black' />
                    <span className='ml-3 text-xl text-black'>Ordenes</span>
                </Link>
                <Link href={''}
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoPeopleOutline size={30} color='black' />
                    <span className='ml-3 text-xl text-black'>Usuarios</span>
                </Link>
            </nav>

        </div>
    )
}

