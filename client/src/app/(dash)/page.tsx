import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Sidebar } from "../../components/main/navigation"
import { Users, columns } from "./users/columns"
import { DataTable } from "./users/user-table"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "../../components/ui/button"


 
async function getData(): Promise<Users[]> {
  // Fetch data from your API here.
  return [

    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Restricted",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Restricted",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Restricted",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Restricted",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Restricted",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Restricted",
      userName: "Hello",
      email: "m@example.com",
    },
    {
      id: "366dg",
      role: "Admin",
      userName: "Hello",
      email: "m@example.com",
    },
    
    // ...
  ]
}

export default async function Home() {
  const data = await getData()
  return (
    <>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <div className="w-screen px-10">
          <div className="pt-6 pb-8 px-10">
            <h1 className="text-3xl">
              Check out your users
            </h1>
            <p className="text-slate-400 text-sm mt-2"> Lorem ipsum lorem ipsum lorem ipsum lorem <br/> ipsum lorem ipsum</p>
          </div>
          <div className="px-10">
            <DataTable columns={columns} data={data}/>
          </div> 
        </div> 
      </div>
    </>
  )
}
