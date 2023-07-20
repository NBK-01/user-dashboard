import { SignInTitle, CreateUserModal } from './layout.components'
import { LoginForm, CreateUser } from "./forms.components"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import {Button} from "../ui/button"
import {User, Wallet, Wrench} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React from 'react'

export const Navbar = () => {
  return (
    <>
        <nav className="flex max-w-screen-2xl px-10 pt-5 pb-4 justify-between border-b shadow-sm">
            <div className='flex flex-row'>
                <Image className="my-auto items-center" src="/favicon.ico" width={40} height={40} alt="vercel logo"/>
                <h1 className="my-auto items-center ml-4 text-xl"> User Dashboard </h1> 
            </div>
          <div className="flex flex-row space-x-8">
            <Link href="/signin">
              <Button> Logout </Button>
            </Link>
          </div>
        </nav>
    </>
  )
}

export const Sidebar = () => {
  return (
    <>
      <aside className="flex flex-col h-[85vh] m-5 w-[250px] border rounded-xl justify-between">
        <div className="px-3 py-4 space-y-5">
            <Link href="/dash" className="flex flex-row space-x-2 px-5 py-2 hover:bg-slate-100 rounded-md cursor-pointer"> 
              <User strokeWidth={1} className="my-auto"/>
              <p className="m-auto text-base font-normal"> Users </p>
            </Link>
            <Link href="/dash/settings" className="flex flex-row space-x-2 px-5 py-2 hover:bg-slate-100 rounded-md cursor-pointer"> 
              <Wallet strokeWidth={1} className="my-auto" />
              <p className="m-auto text-base font-normal"> Nav 2 </p>
            </Link>
            <div className="flex flex-row space-x-2 px-5 py-2 hover:bg-slate-100  rounded-md cursor-pointer"> 
              <Wrench strokeWidth={1} className="my-auto" />
              <h1 className="m-auto text-base font-normal"> Nav 3 </h1>
            </div>
        </div>
      <div className="flex flex-col w-full px-3 space-y-5 mb-5">
           
            
            <Button> Logout </Button>
            
            <Button variant="outline"> Create user </Button>
      </div>
        
      </aside>
    </>
  )
}

