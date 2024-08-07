'use server'

import { prisma } from "@/lib/prisma";

interface Props {
    userId: string
}
export const removeUserAddress = async ({ userId }: Props) => {
    console.log(userId);

    try {
        const removedAddress = await prisma.userAddress.delete(
            {
                where: {
                    userId
                }
            }
        )

        return { ok: true };

    } catch (error) {

        console.log(error);
        return {
            ok: false, message: 'No se pudo eliminar el address'
        }

    }






}