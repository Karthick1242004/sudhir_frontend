import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Dashboard() {
  return (
    <div className='w-full h-[100vh]'>
      <Navbar/>
      <div className='w-full h-[100vh]'>
        <h1 className='text-center mt-[15%] text-5xl font-semibold'>Welcome Admin Panel</h1>
      </div>
    </div>
  )
}

export default Dashboard
