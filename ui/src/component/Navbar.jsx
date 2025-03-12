import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-green-800 text-xl w-full h-24 font-bold text-white flex'>
        <Link to='/' className='ml-60 mt-6'>HOME</Link>
        <Link to='/addstudent'className='ml-24 mt-6'>ADD STUDENT</Link>
        <Link to='/studentdetails'className='ml-24 mt-6'>STUDENT DETAILS</Link>
    </div>
  )
}

export default Navbar