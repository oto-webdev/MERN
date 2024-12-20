import React, { useState } from 'react'
import { registerUser } from '../components/data/api'
import Alert from '../components/Error'

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [error, setError] = useState('ok')

    const handleRegister = (e) => {
        e.preventDefault()
    }
  
  return (
    <div className='flex items-center justify-center min-h-screen'> 
        <div className='bg-white rounded-md shadow-lg p-5'>
            <h1 className='font-bold mb-4 md:text-3xl text-2xl'>Create a New Accaunt</h1>

            <form method="POST" className='p-5' onSubmit={handleRegister}>
                <label 
                    htmlFor="email" 
                    className='text-lg'>
                    email:  
                </label>

                <input 
                    type="email" 
                    name="email" 
                    className='block w-full rounded-md p-1.5 placeholder:text-sm text-sm border-0 outline-0 ring-1 ring-slate-950 focus:ring-2 mb-4' 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoFocus 
                />

                <label 
                    htmlFor="password" 
                    className='text-lg'>
                    password:
                </label>

                <input 
                    type="password" 
                    name="password" 
                    className='block w-full rounded-md p-1.5 placeholder:text-sm text-sm border-0 outline-0 ring-1 ring-slate-950 focus:ring-2 mb-4'
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    autoFocus 
                />

                <label 
                    htmlFor="password" 
                    className='text-lg'>
                    confirmPassword:
                </label>

                <input 
                    type="confirmPassword" 
                    name="password" 
                    className='block w-full rounded-md p-1.5 placeholder:text-sm text-sm border-0 outline-0 ring-1 ring-slate-950 focus:ring-2 mb-4'
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    autoFocus 
                />

                <button className='block w-full text-white rounded-md p-2 bg-black hover:bg-slate-900 duration-200'>
                    Register
                </button>
            </form>

            <div className=''>
                {error && <Alert msg={error} />}
            </div>
        </div>
    </div>
  )
}

export default Register;