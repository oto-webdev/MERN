import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";

const Error = ({msg}) => {
  return (
    <div className='text-red-700 rounded-md p-2 text-md block'>
        <div className='flex items-center gap-1 justify-center'>
          <FiAlertTriangle />
          {msg}
        </div>
    </div>
  )
}

export default Error;