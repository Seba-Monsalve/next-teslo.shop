import { initialData } from "./seed";
import { prisma } from "../lib/prisma";
import { countries } from './seed-country';



async function main() {

    // Borrar la data
    await prisma.country.deleteMany();

    await prisma.userAddress.deleteMany();
    await prisma.user.deleteMany();
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();


    const { categories, products, users } = initialData;

    const categoryData = categories.map(name => ({ name }))

    await prisma.category.createMany({
        data: categoryData
    })

    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id
        return map;
    }, {} as Record<string, string>)



    products.forEach(async (prod) => {
        const { images, type, ...product } = prod;

        const dbProduct = await prisma.product.create({
            data: { ...product, categoryId: categoriesMap[type] }
        })

        const imagesData = images.map(img =>
        ({
            url: img, productId: dbProduct.id
        }))

        await prisma.productImage.createMany({ data: imagesData });
    })


    await prisma.user.createMany({ data: users })


    await prisma.country.createMany({ data: countries })


}




(() => {
    main();
})()