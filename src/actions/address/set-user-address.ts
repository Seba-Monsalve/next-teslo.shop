
'use server'

import { Address } from "@/interfaces/address.interface";
import { prisma } from "@/lib/prisma";

interface Props {
    userId: string,
    address: Address
}

export const setUserAddress = async ({ userId, address }: Props) => {
    try {
        const newAddress = await createOrUpdateAddress({ address, userId })
        return {
            ok: true, newAddress
        }

        // const address = await prisma.userAddres.update()
    } catch (error) {
        console.log(error);
        return { ok: false, message: 'no se pudo crear el address' }
    }
}

export const createOrUpdateAddress = async ({ userId, address }: Props) => {
    try {

        const { firstName, lastName, address: address1, postalCode, phone, country, address2 ,city} = address;
        const addressToSave = {
            firstName, lastName, address: address1, postalCode, phone, countryId: country, address2: address2, city
        }

        const storeAddress = await prisma.userAddress.findFirst(
            { where: { userId } }
        )
        if (!storeAddress) {
            const newAddress = await prisma.userAddress.create({
                data: {
                    ...addressToSave
                    , userId: userId
                }
            })
            console.log({ newAddress });

            return newAddress
        }

        const updatedAddress = await prisma.userAddress.update(
            {
                data: addressToSave,
                where: {
                    userId
                }
            })

        return updatedAddress;

    } catch (error) {
        console.log(error);
        return { ok: false, message: 'no se pudo crear/update el address' }
    }
}