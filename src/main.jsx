import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/home.jsx'
import Carros from './pages/Carros/carros.jsx'

function App(){
    return(
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/carros' element={<Carros/>} />
      </Routes>
    </Router>

    ); 
  }

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

