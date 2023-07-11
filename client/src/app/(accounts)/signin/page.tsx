import { SignInTitle } from '../../../components/main/layout.components'

import { LoginForm } from "../../../components/main/forms.components"

import React from 'react'




async function getData() {

  const res = await fetch('http://localhost:3001/users/api/get/4')

  

  if (!res.ok) {

    

    throw new Error('Failed to fetch data')

  }

 

  return res.json()

}





export default async function Singin() {




  const data = await getData()

  

  return (

    <>

    <div className="max-w-screen-2xl flex flex-col items-center pt-28">

       <h1>

       {data.firstName}

      </h1>

        <SignInTitle/>

        <LoginForm/>

    </div>

    </>

  )

}