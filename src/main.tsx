import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/tailwindcss.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
