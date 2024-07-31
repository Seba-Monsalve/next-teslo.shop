import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px]" >

      <IoCardOutline size={80} className='mx-5' />
      <div className='flex flex-col items-center'>
        <h1>Tu carrito esta vacio</h1>

        <Link
          href={'/'}
          className='text-blue-500 mt-2 text-4xl'
        ></Link>
      </div>
    </div>
  );
}
