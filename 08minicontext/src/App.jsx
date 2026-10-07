import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'


function App() {


  return (
    <UserContextProvider>
     <h1>React with Chai</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
