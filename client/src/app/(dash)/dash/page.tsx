import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Sidebar } from "../../../components/main/navigation"
import { Users, columns } from "./users/columns"
import { DataTable } from "./users/user-table"
import { MoreHorizontal } from "lucide-react" 
import { Button } from "../../../components/ui/button"
import { getAllUsers } from '../../../lib/userApi'

export const revalidate = 0

export default async function Home() {

  
  
  const users = await getAllUsers()

  return (
    <>
          <div className="p-10">
            <DataTable columns={columns} data={users}/>
          </div> 
      
    </>
  )
}
