import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/ui/Login'
import Home from './components/ui/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/ui/Signup'

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={browserRouter} />
      
    </>
  )
}

export default App
