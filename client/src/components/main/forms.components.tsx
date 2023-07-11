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
  return (
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
              <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="email"> Roles </Label>
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
            <Button className="" htmlType="submit"> Submit </Button>
      </form>
  )
}

export function EditUser({userName, userEmail, userRole}) {
  return (
    <form className="px-8 py-10">
            <div>
            <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="name"> Username </Label>
                <Input id="name" placeholder={userName} />
              </div>
              <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="email"> Email </Label>
                <Input id="email" placeholder={userEmail}/>
              </div>
              <div className="flex flex-col space-y-1.5 mb-8 md:w-[280px]">
                <Label htmlFor="email"> Roles </Label>
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder={userRole}/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin"> Admin </SelectItem>
                    <SelectItem value="Restricted"> Restricted </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="" htmlType="submit"> Submit </Button>
      </form>
  )
}
