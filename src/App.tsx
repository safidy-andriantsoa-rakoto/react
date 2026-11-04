import Home from "./pages/home/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Projects from "./pages/projects/projects"
import About from "./pages/about/about"
import Contact from "./pages/contacts/contact"

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

