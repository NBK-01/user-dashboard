"use client"

import Link from "next/link";
import Image from "next/image";
import React from "react";
import {Table, TableCaption, TableHeader, TableHead, TableBody, TableRow, TableCell} from "../ui/table"
import {CreateUser} from "./forms.components"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../ui/dialog"
import {
    Button
} from "../ui/button"
  

export const SignInTitle = () => {
    return (
        <div className="flex flex-col mx-auto mb-8">
            <Link href="/">
                <Image className="mx-auto items-center mb-4" src="/favicon.ico" width={70} height={70} alt="vercel logo"/>
            </Link>
                    
            <div>
                <h1 className="text-3xl font-semibold text-black text-center"> Sign In  </h1>
                <p className="text-center text-base text-slate-500 mt-2 max-w-[300px] mx-auto"> Use your set credentials to get access your user dashboard </p>
            </div>        
        </div>
    )
}

export const RegisterTitle = () => {
    return (
        <div className="flex flex-col mx-auto mb-8">
            <Link href="/">
                <Image className="mx-auto items-center mb-4" src="/favicon.ico" width={70} height={70} alt="vercel logo"/>
            </Link>
                            
            <div>
                <h1 className="text-3xl font-semibold text-black text-center"> Create an account  </h1>
                <p className="text-center text-base text-slate-500 mt-2 max-w-[300px] mx-auto"> Use your set credentials to get access your user dashboard </p>
            </div>        
        </div>
    )
}


export const CreateUserModal = () => {
    return (
        <Dialog>
            <DialogTrigger>
            <Button variant="outline"> Create User</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create User</DialogTitle>
                    <CreateUser/>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}






