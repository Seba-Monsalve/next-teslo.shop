'use server'

import { signOut } from "@/auth";


export const logout = async () => {
    console.log('DESLOGUEADO');
    await signOut();
    console.log('DESLOGUEADO POR DOS');
}