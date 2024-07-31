import { Category, initialData } from "@/seed/seed";
import notFound from "../not-found";
import { ProductGrid, Title } from "@/components";


interface Props {
  params: { id: Category }
}
export default function ({ params }: Props) {

  const { id } = params;

  const categories: Record<Category, string> =
  {
    'kid': 'niños'
    , 'women': 'mujeres'
    , 'men': 'hombres'
    , 'unisex': 'todos'
  }


  if (!Object.keys(categories).includes(id))
    return notFound();

  const products = initialData.products.filter(prod => prod.gender == id);


  return (

    <main >
      <Title title={`Artiuclos para ${(categories)[id]} `} subtitle=""
        className='' />
      <ProductGrid products={products} />
    </main>
  );
}
