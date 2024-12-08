import React, { useState } from 'react'
import { registerUser } from '../components/data/api'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <div>Register</div>
  )
}

export default Register;