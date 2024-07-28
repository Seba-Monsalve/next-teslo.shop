import { initialData } from '@/seed/seed';
import { Title } from '../../components/ui/title/Title';
import { ProductGrid } from '../../components/products/products-grid/ProductGrid';


const products = initialData.products;
export default function Home() {
  return (
    <main >
      <Title title='Tienda' subtitle='Todos los productos' className='' />

      <ProductGrid products={products} />
    </main>
  );
}
