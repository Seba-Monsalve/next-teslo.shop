'use client'
import { logout } from '@/actions/auth/logout';
import { useUIStore } from '@/store';
import clsx from 'clsx';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoCloseOutline, IoSearchCircleOutline, IoPersonOutline, IoTicketOutline, IoLogOutOutline, IoShirtOutline, IoPeopleOutline, IoLogInOutline } from 'react-icons/io5';

export const Sidebar = () => {

    const { isSideMenuOpen, closeSideMenu } = useUIStore()
    const { data: session } = useSession()
    const [isLoading, setisLoading] = useState(true)

    const isAuth = !!session?.user
    const isAdmin = session?.user.role === 'admin';


    //console.log({ isAuth, user: session?.user, isAdmin });
    useEffect(() => {
        //yconsole.log({ isAuth });
        setisLoading(false)
    }, [isSideMenuOpen, isAuth])



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

                <Link href={'/profile'}
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    onClick={() => closeSideMenu()}
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


                {!isAuth ?

                    // LOGIN
                    <Link href={'/auth/login'}
                        onClick={() => { closeSideMenu() }}
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    ><IoLogInOutline size={30} color='black' /><span className='ml-3 text-xl text-black'>Ingresar</span></Link>
                    :
                    <Link href={'/'}
                        onClick={() => { signOut({ redirect: false }); closeSideMenu() }}
                        className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                    ><IoLogOutOutline size={30} color='black' /><span className='ml-3 text-xl text-black'>Salir</span>
                    </Link>
                }
                {

                    (isAdmin &&
                        <>
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
                        </>
                    )


                }


            </nav>

        </div >
    )
}

