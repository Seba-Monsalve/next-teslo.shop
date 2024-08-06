'use client'

import { login, registerUser } from '@/actions'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormInputs = {
    name: string,
    email: string,
    password: string
}

export const RegisterForm = () => {
    const [error, seterror] = useState('')


    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();


    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const { name, email, password } = data;
        const resp = await registerUser(name,password, email)
        if (!resp.ok) {
            seterror(resp.message || '')
            return
        }
        await login(email.toLowerCase(), password)
        window.location.replace('/');
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

            {errors.name?.type == 'required' && <span className='text-red-400'> El nombre es obligatorio!</span>}

            <label htmlFor="name">Nombre completo</label>
            <input  {...register('name', { required: true })}
                className={`px-5 py-2 border bg-gray-200 rounded mb-5 ${errors.name && 'border-red-400'}`}
                type="text" />

            {errors.email?.type == 'required' && <span className='text-red-400'> El email es obligatorio!</span>}
            <label htmlFor="email">Correo Electronico</label>
            <input  {...register('email', { required: true, })}
                className={`px-5 py-2 border bg-gray-200 rounded mb-5 ${errors.email && 'border-red-400'}`}
                type="email" />

            {errors.password?.type == 'required' && <span className='text-red-400'> La contraseña es obligatorio!</span>}
            <label htmlFor="password">Contraseña</label>
            <input  {...register('password', { required: true })}
                className={`px-5 py-2 border bg-gray-200 rounded mb-5 ${errors.password && 'border-red-400'}`}
                type="password" />

            {error && <span className='text-red-400'> {error}</span>}

            <button
                className="btn-primary">
                Crear Cuenta
            </button>

            <div className="flex items-center my-5">
                <div className="flex-1 border-t border-gray-500"></div>
                <div className="px-2 text-gray-800">O</div>
                <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <Link
                href="/auth/login"
                className="btn-secondary text-center">
                Ingresar
            </Link>
        </form>
    )
}
