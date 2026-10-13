import React from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import NavBar from './components/navbar.tsx'

function App() {

  return (
    <>
        <NavBar></NavBar>
        <div className="flex align-middle justify-center bg-gray-50">
            <h2 className="text-blue-500 font-bold text-shadow-blue-100 text-shadow-md">hello, I'm Safidy</h2>
        </div>
    </>
  )
}

export default App
