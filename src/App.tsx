// import NavBar from './components/navbar.tsx'
// import Card from './components/card.tsx'
// import { cards } from './const/lists.tsx'

import Home from "./pages/home/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Projects from "./pages/projects/projects"

function App() {
  return (
   <BrowserRouter>
    <Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Navbar>
    </BrowserRouter>
  )
}

export default App

