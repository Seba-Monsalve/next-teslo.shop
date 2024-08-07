'use server'

import { prisma } from "@/lib/prisma";


export const getUserAddress = async (userId: string) => {

    try {
        const userAddress = await prisma.userAddress.findFirst(
            { where: { userId } }

        )

        if (!userAddress) return ;

        const { countryId: country, address2, ...rest } = userAddress;
        return { country, ...rest, address2: address2 ? address2 : '' }

    } catch (error) {
        console.log(error);
        return ;

    }


}