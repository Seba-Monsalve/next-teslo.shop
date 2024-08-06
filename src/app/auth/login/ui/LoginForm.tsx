'use client'

import { authenticate } from '@/actions'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { IoArrowForwardCircle, IoInformationCircle } from 'react-icons/io5'
import clsx from 'clsx';
import { useRouter } from 'next/navigation'

export const LoginForm = () => {

    const router = useRouter()
    const [state, dispatch] = useFormState(authenticate, undefined);

    useEffect(() => {
        if (state === 'Success')
            // router.replace('/')
            window.location.replace('/')
    }, [state])


    return (

        <form action={dispatch} className="flex flex-col">

            <label htmlFor="email">Correo electrónico</label>
            <input
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
                type="email"
                name='email'
            />


            <label htmlFor="email">Contraseña</label>
            <input
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
                type="password"
                name='password'
            />

            {state === 'CredentialsSignin' && (
                <>
                    <IoInformationCircle className='h-5 w-5 text-red-500' />
                    <p className='text-sm text-red-500'> Credenciales incorrectas</p>
                </>

            )}

            <LoginButton />




            {/* divisor l ine */}
            <div className="flex items-center my-5">
                <div className="flex-1 border-t border-gray-500"></div>
                <div className="px-2 text-gray-800">O</div>
                <div className="flex-1 border-t border-gray-500"></div>
            </div>
            <Link
                href="/auth/new-account"
                className="btn-secondary text-center">
                Crear una nueva cuenta
            </Link>

        </form>
    )
}


function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button type='submit'
            className={clsx(
                'btn-primary  ',
                {
                    'disabled text-red-400 bg-red-600': pending
                })}
            disabled={pending}
        >
            Log Inasd <IoArrowForwardCircle className='ml-auto h-5 w-5 text-gray-50' />
        </button>
    )

}