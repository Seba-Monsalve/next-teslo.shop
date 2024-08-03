import { useCartStore } from '@/store'
import Link from 'next/link';
import React from 'react'

export const SummaryInfo = () => {
    const {getSummaryInfo,getTotalItems} = useCartStore();
    const {subtotal,total,taxes} = getSummaryInfo()
    
  return (

    <div className=" rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Resumen de la orden </h2>
            <div className="grid grid-cols-2">

              <span>No. Productos</span>
              <span className='text-right'>{getTotalItems()} articulos</span>

              <span>Subtotal</span>
              <span className='text-right'>$ {getSummaryInfo().subtotal}</span>

              <span>Impuestos</span>
              <span className='text-right'>$ {taxes}</span>

              <span className='text-2xl mt-5 '>Total</span>
              <span className='text-2xl mt-5 text-right'>$ {total}</span>
            </div>

            <div className='mt-5 mb-2 w-full'>
              <Link className='flex btn-primary justify-center' href={'/checkout/'}>Checkout</Link>
            </div>

          </div>
  )
}
