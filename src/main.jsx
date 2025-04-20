import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App.jsx'
import About from './navbar/About.jsx'
import Contact from './navbar/Contact.jsx'
import Details from './navbar/Details.jsx'
import Projects from './navbar/Projects.jsx'
import Navbar from './navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
      <App />
     <Routes>
      {/* <Route path='/' element = {<Navbar/>}/>  */}
      <Route path="/" element={<About />} /> 
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/projects" element = {<Projects/>}/>
      <Route path="/details" element = {<Details/>}/>
    </Routes> 
  
  </BrowserRouter> 
  
)
