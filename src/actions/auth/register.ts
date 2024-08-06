'use server'

import { prisma } from "@/lib/prisma";
import bcryptjs from 'bcryptjs';

export const registerUser = async (name: string, password: string, email: string) => {
    // REOCRDAR ENCRPTAR LA CONTRASEÑA Y LOWER EL EMAIL

    try {

        const user = await prisma.user.create(
            {
                data: {
                    name,
                    password: bcryptjs.hashSync(password),
                    email: email.toLowerCase()
                }
                , select: {
                    id: true,
                    name: true,
                    email: true

                }
            }
        )
        console.log({ ok: true,user });
        return { ok: true, user }


    } catch (error) {

        console.log(error);
        return {
            ok: false, message: 'nose pudo crear el user'
        }
    }



}