'use client'

import { getStockBySlug } from '@/actions/products/get-stock-by-slug'
import { titleFont } from '@/config/font'
import React, { useEffect, useState } from 'react'

interface Props {
    slug: string
}

export const StockLabel = ({ slug }: Props) => {

    const [stock, setstock] = useState<number>(0)
    const [loading, isLoading] = useState<boolean>(true)


    useEffect(() => {
        getStock();

    }, [])

    const getStock = async () => {
        const stock = await getStockBySlug(slug) ?? {};
        setstock(stock);
        isLoading(false);
    }


    return (
        <>{

            loading ?
                <h1 className={`${titleFont.className} antialiased font-bold text-md animate-pulse bg-gray-300 opacity-5`}>
                    &nbsp;
                </h1> :
                <h1 className={`${titleFont.className} antialiased font-bold text-md`}>
                    Stock: {stock}
                </h1>
        }

        </>

    )
}