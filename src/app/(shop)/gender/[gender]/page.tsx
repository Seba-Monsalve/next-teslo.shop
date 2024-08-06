export const revalidate = 60;

import notFound from "../not-found";
import { ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { getPaginatedProductsWithImage } from "@/actions";
import { Pagination } from "@/components";

interface Props {
  params: { gender: string }
  searchParams: {
    page?: string;
  }
}
export default async function ({ params, searchParams }: Props) {

  const { gender } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;


  const genders: Record<Gender, string> =
  {
    'kid': 'niños'
    , 'women': 'mujeres'
    , 'men': 'hombres'
    , 'unisex': 'todos'
  }



  if (!Object.keys(genders).includes(gender))
    return notFound();


  const { products, totalPages } = await getPaginatedProductsWithImage({ gender: gender as Gender, page })

  console.log(products);



  return (

    <main >
      <Title title={`Artiuclos para ${(genders)[gender as Gender]} `} subtitle=""
        className='' />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </main>
  );
}
