'use server'
import { prisma } from "@/lib/prisma"

export const getStockBySlug = async (slug: string): Promise<number> => {

    try {

        const resp = await prisma.product.findUnique({
            select: { inStock: true },
            where: { slug }
        })
        return resp?.inStock ?? 0;

    } catch (error) {

        console.log(error);
        return 0;
    }

}