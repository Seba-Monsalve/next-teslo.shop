'use client'

import Image from "next/image"
import { Product } from '../../../interfaces/product.interface';
import Link from "next/link";
import { useState } from "react";

interface Props {
    product: Product
}

export const ProductGridItem = ({ product }: Props) => {
    const [image, setImage] = useState(product.images[0])

    return (
        <div className="rounded-md overflow-hidden fade-in"
        >
            <Link href={`/product/${product.slug}`} className="hover:text-slate-300">
                <Image src={`/products/${image}`} alt={`imagen de ${product.title}`}
                    className=" w-full object-cover"
                    width={500} height={500}
                    onMouseEnter={() => setImage(product.images[1])}
                    onMouseLeave={() => setImage(product.images[0])}
                />
                <div className="p-4 flex flex-col">
                    {product.title}
                    <span className="font-bold">$ {product.price}</span>
                </div>
            </Link >
        </div>
    )
}
