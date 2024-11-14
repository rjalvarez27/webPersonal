import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../src/pages/App.jsx'
import About from '../src/pages/About.jsx'
import Contact from '../src/pages/Contact.jsx'
import '../src/styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/webpersonal">
      <Routes >
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/contac' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
