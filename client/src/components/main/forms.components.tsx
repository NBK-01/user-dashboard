"use client"

import * as React from "react"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import Link from "next/link"
import { useState } from "react"
import { createUser, deleteUser, editUser } from "../../lib/userApi"
import { useRouter } from "next/navigation"
import { useToast } from "../../components/ui/use-toast"
import { DialogTrigger, Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog"



export function LoginForm() {
  return (
    <>
    <Card className="">
      <CardContent>
        <form className="px-8 py-14">
          <div>
            <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
              <Label htmlFor="email"> Email </Label>
              <Input id="email" placeholder="johndoe@techgenies.com" />
            </div>
            <div className="flex flex-col space-y-1.5 md:w-[280px]">
              <Label htmlFor="name"> Password </Label>
              <Input id="password" type="password" placeholder="*******" />
            </div>
          </div>
          <Button className="mt-5">Submit</Button>
        </form>
      </CardContent>
    
    </Card>
     <div className="flex justify-between w-[300px] pt-3">
        <Link href="/" className="text-sm text-slate-500 hover:text-accent"> Forgot password </Link>
        <Link href="/register" className="text-sm text-slate-500 hover:text-accent"> Create an account </Link>
    </div>
    </>
  )
}

export function SignUpForm() {
    return (
      <>
      <Card className="">
        <CardContent>
          <form className="px-8 py-10">
            <div>
            <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="name"> Username </Label>
                <Input id="name" placeholder="JohnDoe123" />
              </div>
              <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="email"> Email </Label>
                <Input id="email" placeholder="johndoe@techgenies.com" />
              </div>
              <div className="flex flex-col mb-8 space-y-1.5 md:w-[280px]">
                <Label htmlFor="name"> Password </Label>
                <Input id="password" type="password" placeholder="*******" />
              </div>
              <div className="flex flex-col space-y-1.5 md:w-[280px]">
                <Label htmlFor="name">Confirm Password </Label>
                <Input id="password" type="password" placeholder="*******" />
              </div>
            </div>
            <div className='flex flex-col'>
                <Button className="w-full mt-8">Submit</Button>
                <span className="text-slate-500 text-sm mx-auto mt-5"> Already have an account? <Link className="text-accent" href="/signin"> Sign-in </Link> </span>
            </div>
          </form>
        </CardContent>
      </Card>
       {/* <div className="flex justify-between w-[300px] pt-3">
          <Link href="/" className="text-sm text-slate-500 hover:text-accent"> Forgot password </Link>
          <Link href="/register" className="text-sm text-slate-500 hover:text-accent"> Create an account </Link>
      </div> */}
      </>
    )
  }


export function CreateUser() {
  const [firstNameVal, setFirstNameVal] = useState('')
  const [lastNameVal, setLastNameVal] = useState('')
  const [emailVal, setEmailVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')
  const [idVal, setIdVal] = useState('')
  const { toast } = useToast()

  const router = useRouter()

  const handleCreateUser: React.FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault()
      console.log(firstNameVal)
      console.log(lastNameVal)
      console.log(emailVal)
      await createUser({
        firstName: firstNameVal,
        lastName: lastNameVal,
        email: emailVal,
        hashPass: "BlahBlah",
        role: "Admin",
      })
    router.refresh()
    toast({
      title: "Success",
      description: `User ${firstNameVal} ${lastNameVal} created`,
    })

     
  }

  return (
    <form onSubmit={handleCreateUser} className="px-8 py-10">
            <div>
              <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="firstName"> First Name </Label>
                <Input id="firstName" value={firstNameVal} onChange={e => setFirstNameVal(e.target.value)} placeholder="JohnDoe123" />
              </div>
              <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="lastName"> Last Name </Label>
                <Input id="lastName" value={lastNameVal} onChange={e => setLastNameVal(e.target.value)} placeholder="JohnDoe123" />
              </div>
              <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="email"> Email </Label>
                <Input id="email" value={emailVal} onChange={e => setEmailVal(e.target.value)} placeholder="johndoe@techgenies.com" />
              </div>
              <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="password"> Password </Label>
                <Input id="password" value={passwordVal} onChange={e => setPasswordVal(e.target.value)} placeholder="johndoe@techgenies.com" />
              </div>
              <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="role"> Roles </Label>
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Roles" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin"> Admin </SelectItem>
                    <SelectItem value="Restricted"> Restricted </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit"> Submit </Button>
      </form>
  )
}

export function EditUser({user}) {
  const [firstNameVal, setFirstNameVal] = useState<string>(user.firstName)
  const [lastNameVal, setLastNameVal] = useState<string>(user.lastName)
  const [emailVal, setEmailVal] = useState<string>(user.email)
  const [idVal, setIdVal] = useState('')

  const router = useRouter()
  const { toast } = useToast()

  const handleEditUser: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    console.log(firstNameVal)
    console.log(lastNameVal)
    console.log(emailVal)
    await editUser({
      id: user.id,
      firstName: firstNameVal,
      lastName: lastNameVal,
      email: emailVal,
      role: "Admin",
    })
    toast({
      title: "Success",
      description: `User ${firstNameVal} ${lastNameVal} edited`,
    })
  router.refresh()
   
}
  return (

    <>
      <Dialog>
        <DialogTrigger>
          Edit
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> Edit User </DialogTitle>
            <form onSubmit={handleEditUser} className="px-8 py-10">
        <div>
          <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
            <Label htmlFor="firstName"> First Name </Label>
            <Input id="firstName" value={firstNameVal} onChange={e => setFirstNameVal(e.target.value)} placeholder="JohnDoe123" />
          </div>
          <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
            <Label htmlFor="lastName"> Last Name </Label>
            <Input id="lastName" value={lastNameVal} onChange={e => setLastNameVal(e.target.value)} placeholder="JohnDoe123" />
          </div>
          <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
            <Label htmlFor="email"> Email </Label>
            <Input id="email" value={emailVal} onChange={e => setEmailVal(e.target.value)} placeholder="johndoe@techgenies.com" />
          </div>
          <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
            <Label htmlFor="role"> Roles </Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Roles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin"> Admin </SelectItem>
                <SelectItem value="Restricted"> Restricted </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit"> Submit </Button>
      </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}


export function DeleteButton({id}) {
    const router = useRouter()
    const { toast } = useToast()

  const handleDelete = async (id: string) => {
    await deleteUser(id)
    router.refresh()
    toast({
      variant: "destructive",
      title: "Deleted",
      description: `User ${id} succesfully deleted`,
    })
  }
  return (
    <>
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="my-auto" size="sm" variant="destructive"> Delete </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this user
            and remove their data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}> Confirm 
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </>
    
  )
}