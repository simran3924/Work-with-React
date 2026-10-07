import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth' // Double-check your path to auth.js
import { login, logout } from './store/authSlice' // Double-check your slice paths
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          // If a user profile exists, log them into your Redux store state
          dispatch(login({ userData }))
        } else {
          // If user is a guest, clear out the store state safely
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  // Display a clean loading message while Appwrite verifies the user session token
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App;