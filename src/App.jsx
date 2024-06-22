import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import General from './components/General.jsx'
import Educational from './components/Educational.jsx'
import Practical from './components/Practical.jsx'

function App() {

  return (
    <>
      <h2>CV Application</h2>
      <General></General>
      <Educational></Educational>
      <Practical/>
    </>
  )
}

export default App
