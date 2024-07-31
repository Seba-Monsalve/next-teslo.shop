import Link from 'next/link';
import { Title } from '../../../components/ui/title/Title';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import { QtySelector } from '@/components';


const products = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CheckOutPage() {
  return (
    <div className="flex justify-center item-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col  w-[1000px]">
        <Title title='Verificar Orden'></Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* CARRITO */}
          <div className="flex flex-col mt-5 gap-5">
            <span className='text-xl'>Ajustar Elemento</span>
            <Link href={'/cart'} className='underline mb-5'>
              Editar carrito
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
                  <p>Subtotal: ${product.price * 3}</p>
                  <button className='underline mt-3 '>Remover</button>
                </div>
              </div>
            )}
          </div>

          {/* checkout */}


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

            <div className='mt-5 mb-2 w-full'>
              <Link className='flex btn-primary justify-center' href={'/orders/123'}>Colorcar orden</Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
