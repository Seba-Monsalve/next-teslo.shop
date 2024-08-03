'use client'
import { QtySelector } from '@/components';
import { useCartStore } from '@/store'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


export const ProductsInCart = () => {
    const { cart, updateProductQty,removeProductQty} = useCartStore();
    const [isLoaded, setisLoaded] = useState(true)


    useEffect(() => {

        setisLoaded(false)
    }, [])

    if (isLoaded)
        return <p>Cargando...</p>
    return (
        <>

            {cart.map((product) =>
                <div key={`${product.slug} - ${product.size}`} className='flex'>
                    <Image
                        src={`/products/${product.image}`}
                        alt={product.title}
                        width={100}
                        height={100}
                        className='mr-5 rounded-none'
                    />
                    <div>
                        <Link className='hover:underline cursor-pointer' href={`product/${product.slug}`} >
                            <p>{product.title} - {product.size} Size</p>
                        </Link>
                        <p>{product.price}</p>
                        <QtySelector
                            onQtyChange={(value) => updateProductQty(product, value)}
                            quantity={product.quantity} />
                        <button className='underline mt-3 ' onClick={()=>removeProductQty(product)}>Remover</button>
                    </div>
                </div>
            )}</>
    )
}
