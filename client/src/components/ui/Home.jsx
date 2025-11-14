import React from 'react'
import Leftsidebar from './Leftsidebar'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom'




const Home = () => {
  return (
    <div className='flex'>
        <div className='flex-grow'>
            <Dashboard/>
            <altdashboard/>
            <Outlet/>
            </div>
      <Leftsidebar/>
    </div>
  )
}

export default Home
