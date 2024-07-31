import Link from 'next/link';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import { Title } from '@/components';
import clsx from 'clsx';
import { IoCartOutline } from 'react-icons/io5';


const products = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  params: {
    id: string
  }
}

export default function ({ params }: Props) {

  const { id } = params;

  //TODO: VERIFICACIONES DE BACKEDN

  return (
    <>
      <Title title={`Orden #${id}`} className='text-center' />
      <div className="flex  justify-center item-center mb-72 px-10 sm:px-0">
        <div className="flex flex-col  ">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className={
              clsx('flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5'
                , { 'bg-red-500': false }
                , { 'bg-green-700': true }

              )
            }>
              <IoCartOutline />
              <span className='mx-5'>Pagada</span>
            </div>
          </div>

          {products.map((product) =>
            <div key={product.slug} className='flex'>
              <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                width={100}
                height={100}
                className='mr-5 rounded-none'
              />
              <div>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>Subtotal: ${product.price * 3}</p>
                <button className='underline mt-3 '>Remover</button>
              </div>
            </div>
          )}
          {/* checkout */}
        </div>

        <div className=" rounded-xl shadow-xl p-7">
          <h2 className='text-wxl mb-2'>Direccion de entrega</h2>
          <div className='mb-5'>
            <p className='text-xl'>nombre 1</p>
            <p>direccion 1</p>
            <p>Quse se yo!!</p>
          </div>
          <hr />

          <h2 className="text-2xl my-2">Resumen de la orden </h2>
          <div className="grid grid-cols-2">

            <span>No. Productos</span>
            <span className='text-right'>3 articulos</span>

            <span>Subtotal</span>
            <span className='text-right'>$ 100</span>

            <span>Impuestos</span>
            <span className='text-right'>$ 100</span>

            <span className='text-2xl mt-5 '>Total</span>
            <span className='text-2xl mt-5 text-right'>$500</span>
          </div>

            <div className={
              clsx('flex items-center rounded-lg py-2 px-3.5 mt-3 text-xs font-bold text-white mb-5'
                , { 'bg-red-500': false }
                , { 'bg-green-700': true }

              )
            }>
              <IoCartOutline />
              <span className='mx-5'>Pagada</span>
          </div>


        </div>
      </div >

    </>
  );

}
