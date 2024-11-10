import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/home/Home.jsx'
import NavBar from './components/navBar/NavBar.jsx'
import MainCalculator from './components/mainCalculator/MainCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Home />
    <MainCalculator />

  </StrictMode>,
)
