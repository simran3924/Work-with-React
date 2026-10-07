import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Chai from './chai.jsx'

function App() {
  const username = "chai aur code"

  return (
    <>
      <Chai/>
      <h1>Chai aur react {username}</h1>
      <p>test para</p>
      </>
  );
}
export default App;
