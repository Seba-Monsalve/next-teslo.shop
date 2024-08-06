import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import z from 'zod'
import { prisma } from "./lib/prisma";
import bcryptjs from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/auth/login',
        newUser: 'auth/new-account'
    },

    callbacks: {
        jwt({ token, user }) {

            if (user) { token.data = user }
            return token;
        },
        async session({ session, token }) {
            session.user = token as any
            return session
        }
    },
    providers: [
        credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log({ credentials });

                const parsedCred = z.object({ email: z.string().email(), password: z.string().min(2) }).safeParse(credentials);
                console.log({ parsedCred });
                console.log({ log: parsedCred.success });

                if (!parsedCred.success) return null;
                const { email, password } = parsedCred.data;

                //TODO: buscar correo
                console.log({ data: parsedCred.data });

                const user = await prisma.user.findFirst(
                    { where: { email: email.toLowerCase() } }
                )
                console.log({ user });
                if (!user) return null;
                
                console.log(password, user.password);
                if (!bcryptjs.compareSync(password, user.password)) return null;
                console.log({ user });
                const { password: _, ...rest } = user
                return rest;

            },

        })
    ]
})