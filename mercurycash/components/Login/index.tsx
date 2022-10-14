import Router from 'next/router'
import React from 'react'
import Logo from '../Shared/Logo'
import CheckInput from '../Shared/Form/inputCheck'
import PasswordInput from '../Shared/Form/passwordInput'
import SubmitButton from '../Shared/Form/submitButton'
import TextInput from '../Shared/Form/textInput'

const LoginForm = () => {
  return (
    <form className='flex flex-col w-full items-center justify-center gap-5 py-12'>
      <Logo />
      <h1 className='text-center text-2xl text-primary'>Welcome Back</h1>
      <div className='flex relative flex-col  items-center justify-center gap-5'>
        <TextInput
          placeholder='Email'
        />
        <PasswordInput
          placeholder='Password'
        />
        <div>
          <a href="" className='absolute text-primary underline text-xs right-0'>Forgot Password</a>
        </div>

        <div>
          <CheckInput name='Remember me.' value='remember' />
        </div>
        <SubmitButton text='Log In' />
      </div>
      <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>

      <h1 className='text-center'>Don't have an account? <a onClick={() => Router.push("/register")} className=' text-primary underline cursor-pointer'>Sign up</a> instead.</h1>

    </form>
  )
}

export default LoginForm