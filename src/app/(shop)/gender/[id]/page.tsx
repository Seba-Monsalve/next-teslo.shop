import { getPaginatedProductsWithImage } from "@/actions";
import notFound from "../not-found";
import { Gender } from "@prisma/client";
import { ProductGrid, Title } from "@/components";
import { Metadata, ResolvingMetadata } from "next";


interface Props {
  params: { gender: Gender }

}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {


  const gender = params.gender;
  console.log(gender);
  return {
    title: `asd ${gender}`,
    description:'asd',
    openGraph: {
    },
  }
}
export default async function ({ params }: Props) {

  const { gender } = params;
  const categories: Record<Gender, string> =
  {
    'kid': 'niños'
    , 'women': 'mujeres'
    , 'men': 'hombres'
    , 'unisex': 'todos'
  }

  if (!Object.keys(categories).includes(gender))
    return notFound();


  const { products } = await getPaginatedProductsWithImage({ gender })





  return (

    <main >
      <Title title={`Artiuclos para ${(categories)[gender]} `} subtitle=""
        className='' />
      <ProductGrid products={products} />
    </main>
  );
}
