"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "../../../components/ui/badge"
import { MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../../../components/ui/dropdown-menu"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../../components/ui/dialog"
  import {EditUser} from "../../../components/main/forms.components"
import { Button } from "../../../components/ui/button"


export type Users = {
  id: string
  userName: string
  role: "Admin" | "Restricted" 
  email: string
}

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "email",
    header: () => <div className="">Amount</div>,
  },
  {
    accessorKey: "userName",
    header: "Username",
  },

  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
        const role = JSON.stringify(row.getValue("role"))
   
        return <Badge variant="secondary" > {role} </Badge>
  },
},
{
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const users = row.original
 
      return (
        <div className="flex my-auto space-x-4">
        
                <Dialog>
                    <DialogTrigger>
                        <Button variant="outline"> Edit </Button>
                        </DialogTrigger>
                    <DialogContent>
                <DialogHeader>
                    <DialogTitle> Edit </DialogTitle>
                <EditUser userName={users.userName} userEmail={users.email} userRole={users.role}/>
                </DialogHeader>
            </DialogContent>
        </Dialog>
        
        <Button variant="ghost" size="sm" className="my-auto"> Delete </Button>
        </div>
      )
    },
  },
]
