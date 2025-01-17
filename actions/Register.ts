"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
export const register = async (values: z.infer<typeof RegisterSchema>)=>{
  const validatedFields = RegisterSchema.safeParse(values);
  if(!validatedFields.success){
    return {error: "Invalid Fields!"};
  }
  const {email, password, name} = validatedFields.data;
  const hashPassword = await bcrypt.hash(password,10);
  const existingUser = await getUserByEmail(email);
  if(existingUser) return {error: "Email aready registered!"};
  await db.user.create({
    data: {
      name, email, password: hashPassword
    }
  })

  // TODO: Send verification token to email
  return {success: "Email Sent!"};
}