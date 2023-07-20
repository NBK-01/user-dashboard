"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "../../../../components/ui/badge"
import {DeleteButton, EditUser} from "../../../../components/main/forms.components"
import { Button } from "../../../../components/ui/button"
import { ArrowUpDown} from "lucide-react"



export type Users = {
  id: number,
  firstName: string
  lastName: string
  role: string
  email: string
}

export const columns: ColumnDef<Users>[] = [
  {
      accessorKey: "id",
      header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-3 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },

  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const users = row.original
        return <Badge variant="outline"> {users.role} </Badge>
  },

},
{
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const users = row.original
      
      return (
        <div className="flex my-auto space-x-4">
          <EditUser user={users}/>       
          <DeleteButton id={users.id}/>
        </div>
      )
    },
  },
]
