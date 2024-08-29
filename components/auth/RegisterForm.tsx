"use client";
import CardWrapper from "./CardWrapper";
import * as z from "zod";
import {register} from "@/actions/Register"
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FormError } from "../FormErr";
import { FormSuccess } from "../FormSuccess";
import { login } from "@/actions/Login";
import { useState, useTransition } from "react";
const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })


  const onSubmit = (values: z.infer<typeof RegisterSchema>)=>{
    setError("");
    setSuccess("");
   startTransition(()=>{
    register(values).then((data)=>{
      setError(data.error);
      setSuccess(data.success);
    });
   })
  }
  return (
    <CardWrapper headerLabel="Welcome Back!" backButtonHref="/auth/login" backButtonLabel="Already have an account ?" showSocial={true}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((e) => onSubmit(e))} className="space-y-6">
          <div className="space-y-4">
          <FormField control={form.control} name="name" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="UBoy" type="text" disabled={isPending} />
                  </FormControl>

                </FormItem>
              )
            }} />
            <FormField control={form.control} name="email" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="***@gmail.com" type="email" disabled={isPending} />
                  </FormControl>

                </FormItem>
              )
            }} />
            <FormField control={form.control} name="password" render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="****" type="password" disabled={isPending} />
                  </FormControl>

                </FormItem>
              )
            }} />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full">{isPending ? "Loading" : "Login"}</Button>
        </form>
      </Form>
    </CardWrapper>);
}

export default RegisterForm;