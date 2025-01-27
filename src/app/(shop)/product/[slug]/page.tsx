import { getProductBySlug } from "@/actions/products/get-product-by-slug";
import { ProductSlideShow, ProductMobileSlideShow, StockLabel } from "@/components";
import { titleFont } from "@/config/font";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const product = await getProductBySlug(slug)

  return {
    title: product?.title ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      images: `/products/${product?.images[1]}`,
    },
  }
}
export default async function ({ params }: Props) {

  const { slug } = params;
  const product = await getProductBySlug(slug)

  if (!product)
    notFound();
  return (
    <div className=" mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3" >

      {/*DESKTOP  SLIDESHOW */}
      <div className="col-span-1 md:col-span-2 ">

        <ProductSlideShow
          key={product.title}
          title={product.title}
          images={product.images}
          classname="block sm:hidden" />

         <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          classname="hidden md:block" />

      </div>

      {/* DETALLES */}
      <div className="col-span-1 px-5 ">

        <StockLabel slug={slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{product.price}</p>

        <AddToCart product={product} />


        <h3 className="font-bold text-sm">descripcion</h3>
        <p className="font-light ">{product.description}</p>
      </div>

    </div>
  );
}
