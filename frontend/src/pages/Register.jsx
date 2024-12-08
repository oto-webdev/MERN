import React, { useState } from 'react'
import { registerUser } from '../components/data/api'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <div className='flex items-center justify-center min-h-screen'>
      
    </div>
  )
}

export default Register;