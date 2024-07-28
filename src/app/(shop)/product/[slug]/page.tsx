import { QtySelector, SizeSelector,ProductSlideShow } from "@/components";
import { titleFont } from "@/config/font";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string }
}
export default function ({ params }: Props) {

  const { slug } = params;
  const product = initialData.products.find(prod => prod.slug === slug);
  console.log({ slug });
  console.log({ product });
  if (!product)
    notFound();
  return (
    <div className=" mt-5 mb-20 grid md:grid-cols-3 gap-3" >

      {/* SLIDESHOW */}
      <div className="col-span-1 md:col-span-2 ">
      <ProductSlideShow title={product.title} images={product.images}/>
        <h1>Prueba</h1>
      </div>
      {/* DETALLES */}
      <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{product.price}</p>

        {/* selector de tallas */}

        <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />
        {/* selector de cantidad */}
        <QtySelector quantity={2} />

        {/* boton */}

        <button className="btn-primary my-5">Agregar al carrito</button>
        <h3 className="font-bold text-sm">descripcion</h3>
        <p className="font-light ">{product.description}</p>
      </div>

    </div>
  );
}
