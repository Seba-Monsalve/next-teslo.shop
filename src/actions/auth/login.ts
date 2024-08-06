'use server'

import { signIn } from '@/auth';
import { sign } from 'crypto';



export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirect: false,
            redirectTo: '/'
        }
        )
        return 'Success'
    } catch (error) {
        console.log((error as any).message);

        if ((error as any).message === 'CredentialsSignin') return 'CredentialsSignin'
        return (error as any).message
    }
}


export const login = async (email: string, password: string) => {

    try {

        await signIn('credentials', { email, password })
        return { ok: true }

    } catch (error) {

        console.log(error);
        return {
            ok: false, message: 'no se pudo autenticar'
        }
    }

}