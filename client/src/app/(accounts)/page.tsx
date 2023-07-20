import { SignInTitle } from '../../components/main/layout.components'

import { LoginForm } from "../../components/main/forms.components"

import React from 'react'

import { getAllUsers } from '../../lib/userApi'




export default async function Singin() {

  return (

    <>

    <div className="max-w-screen-2xl flex flex-col items-center pt-28">
        <SignInTitle/>

        <LoginForm/>

    </div>

    </>

  )

}