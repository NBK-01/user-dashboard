import { RegisterTitle } from '../../../components/main/layout.components'
import { SignUpForm } from "../../../components/main/forms.components"
import React from 'react'

const Register = () => {
  return (
    <>
    <div className="max-w-screen-2xl flex flex-col items-center pt-14">
        <RegisterTitle/>
        <SignUpForm/>
    </div>
    </>
  )
}

export default Register