import React from 'react'
import LockIcon from '../../Icons/lockIcon'

interface Props {

  placeholder?: string
}

const TextInput: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(function TextInput(
  { placeholder, ...rest },
  ref,
) {
  return (
    <div className='flex justify-end items-center relative'>
      <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        className='rounded-lg text-gray-200 p-3 border border-gray-200 placeholder:text-gray-200' />
      <LockIcon />
    </div>
  )
})

export default TextInput