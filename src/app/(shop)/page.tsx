// revalidacion de la pagina 
export const revalidate = 60;

import { Title } from '../../components/ui/title/Title';
import { ProductGrid } from '../../components/products/products-grid/ProductGrid';
import { getPaginatedProductsWithImage } from '@/actions';
import { redirect } from 'next/navigation';
import { Pagination } from '../../components/ui/pagination/Pagination';


interface Props {
  searchParams: {
    page?: string
  }
}

export default async function Home({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  console.log({ page });
  const { products, currentPage, totalPages } = await getPaginatedProductsWithImage({ page });
  console.log({ totalPages, products });

  if (products.length == 0) {
    redirect('/')
  }


  return (
    <main >
      <Title title='Tienda' subtitle='Todos los productos' className='' />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </main>
  );
}
