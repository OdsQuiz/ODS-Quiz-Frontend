import React from 'react'
import ContentRoutes from './components/ContentRoutes'

import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ContentRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
