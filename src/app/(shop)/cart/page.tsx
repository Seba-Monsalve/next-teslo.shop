import Link from 'next/link';
import { Title } from '../../../components/ui/title/Title';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import { QtySelector } from '@/components';
import { redirect } from 'next/navigation';


const products = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CartPage() {

  redirect('/empty')


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
                  <QtySelector quantity={2} />
                  <button className='underline mt-3 '>Remover</button>
                </div>
              </div>
            )}
          </div>

          {/* checkout */}

          <div className=" rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Resumen de la orden </h2>
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

            <div className='mt-5 mb-2 w-full'>
              <Link className='flex btn-primary justify-center' href={'/checkout/'}>Checkout</Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
