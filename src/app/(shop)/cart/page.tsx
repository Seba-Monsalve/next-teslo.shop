'use client'
import Link from 'next/link';
import { Title } from '../../../components/ui/title/Title';
import { initialData } from '@/seed/seed';
import { redirect } from 'next/navigation';
import { ProductsInCart } from './ui/ProductsInCart';
import { SummaryInfo } from './ui/SummaryInfo';
import { useCartStore } from '@/store';
import { useEffect, useState } from 'react';



export default function CartPage() {

  const { getTotalItems } = useCartStore()
  const totalItems = getTotalItems();
  const [first, setfirst] = useState(false)

  useEffect(() => {
    setfirst(true)
  }, [])


  if (totalItems < 1 && first)
    redirect('/empty')

  if (first)
    return (
      <div className="flex justify-center item-center mb-72 px-10 sm:px-0">
        <div className="flex flex-col  w-[1000px]">
          <Title title='Carrito'></Title>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* CARRITO */}
            <div className="flex flex-col mt-5 gap-5">
              <span className='text-xl'>Agregar mas item</span>
              <Link href={'/'} className='underline mb-5'>
                Continua Comprando
              </Link>
              {/* Items */}
              <ProductsInCart />
            </div>

            {/* checkout */}
            <SummaryInfo />

          </div>
        </div>

      </div>
    );
}
