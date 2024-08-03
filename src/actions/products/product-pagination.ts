'use server'

import { prisma } from "@/lib/prisma"
import { Gender } from "@prisma/client";

interface PaginationOpts {
    page?: number;
    take?: number,
    gender?: Gender
}


export const getPaginatedProductsWithImage = async ({
    page = 1, take = 12,gender

}: PaginationOpts) => {

    if (isNaN(Number(page)) || page < 0) page = 1
    if (isNaN(Number(take))) take = 12

    console.log({page});
    try {
        const products = await prisma.product.findMany(
            {
                skip: (page - 1) * 12,
                take,
                include: {
                    ProductImage: {
                        take: 2,
                        select: {
                            url: true
                        }
                    }
                },
                where: { gender }
            }
        );


        //todo
        const totalCount = await prisma.product.count({where:{gender}});
        const totalPages = Math.ceil(totalCount / take)

        console.log({totalCount,totalPages});

        return {
            currentPage: page,
            totalPages: totalPages,
            products: products.map(prod => ({
                ...prod,
                images: prod.ProductImage.map(img => img.url)
            }))
        };

    } catch (error) {
        throw new Error('No se pudo obtener los productos')
    }


}