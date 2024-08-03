'use client'
import { QtySelector, SizeSelector } from '@/components'
import { Product, ValidSizes, CartProduct } from '@/interfaces/product.interface';
import { useCartStore } from '@/store'
import React, { useState } from 'react'


interface Props {
    product: Product
}
export const AddToCart = ({ product }: Props) => {

    const [size, setsize] = useState<ValidSizes | undefined>()
    const [quantity, setquantity] = useState<number>(1)
    const [posted, setposted] = useState<boolean>(false)

    const addProductToCart = useCartStore(state => state.addProductToCart)

    const addToCart = () => {
        setposted(true)
        if (!size) {
            return;
        };

        const { id, slug, images, price, title } = product;
        addProductToCart({
            quantity, size, id, slug, image: images[0], price, title
        })


        setposted(false);
        setsize(undefined)
        setquantity(1);
    }

    return (
        <>
            {
                (posted && !size &&
                    <span className='mt-2 text-red-500 fade-in'>Debe seleccionar una talla</span>)

            }
            <SizeSelector onSizeChanged={setsize} selectedSize={size} availableSizes={product.sizes} />
            <QtySelector onQtyChange={setquantity} quantity={quantity} />
            <button onClick={() => addToCart()} className="btn-primary my-5">Agregar al carrito</button>
        </>
    )
}
