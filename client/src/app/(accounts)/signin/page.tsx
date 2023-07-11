import { SignInTitle } from '../../../components/main/layout.components'
import { LoginForm } from "../../../components/main/forms.components"
import React from 'react'

const Singin = () => {
  return (
    <>
    <div className="max-w-screen-2xl flex flex-col items-center pt-28">
        <SignInTitle/>
        <LoginForm/>
    </div>
    </>
  )
}

export default Singin