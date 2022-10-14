import Router from 'next/router'
import React from 'react'
import CheckInput from '../Shared/Form/inputCheck'
import PasswordInput from '../Shared/Form/passwordInput'
import SelectCountryInput from '../Shared/Form/selectCountryBox'
import SelectLanguageInput from '../Shared/Form/selectLanguageBox'
import SubmitButton from '../Shared/Form/submitButton'
import TextInput from '../Shared/Form/textInput'
import Logo from '../Shared/Logo'

const RegisterForm = () => {
  return (
    <div className='bg-bg_primary w-50'>
      <form className='flex flex-col w-full items-center justify-center gap-5 py-12'>
        <Logo />
        <h1 className='text-center text-2xl text-primary'>Create your Account</h1>
        <div className='flex relative flex-col  items-center justify-center gap-5'>
          <TextInput
            placeholder='Email'
          />
          <PasswordInput
            placeholder='Password'
          />
          <PasswordInput
            placeholder='Retype Password'
          />
          <SelectCountryInput />
          <SelectLanguageInput />


          <div className='p-2 w-[250px]'>
            <CheckInput name='' value='void' />
            <h1 className='text-xs text-justify'>By continuing I agree to the <a onClick={() => Router.push("/")} className=' text-primary underline cursor-pointer'>Terms of Services</a> and <a onClick={() => Router.push("/")} className=' text-primary underline cursor-pointer'>Privacy Policy</a></h1>
          </div>
          <SubmitButton text='Sign up' />
        </div>
        <span className=" rounded-lg w-[600px] h-0.5 bg-gray-200"></span>

        <h1 className='text-center'>Have an account? <a onClick={() => Router.push("/login")} className=' text-primary underline cursor-pointer'>Log In</a> instead.</h1>

      </form>
    </div>
  )
}

export default RegisterForm