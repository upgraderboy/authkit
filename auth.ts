import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {PrismaAdapter} from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./data/user";

export const {
    handlers: {GET, POST},
    auth, signIn, signOut
} = NextAuth({
    callbacks:{
        async session({token, session}){
            console.log({sessionToken: token, session})
            if (token.sub && session.user){
                session.user.id = token.sub;
            }
            if(token.role && session.user){
                session.user.role = token.role as "ADMIN" | "USER";
            }
            return session
        },
        async jwt({token}){
            // token.customField = "test";
            // console.log(token);
            if(!token.sub) return token;
            const existingUser = await getUserById(token.sub);
            if(!existingUser) return token;
            token.role = existingUser.role;

            return token;
        }
    },
    ...authConfig,
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"}
})