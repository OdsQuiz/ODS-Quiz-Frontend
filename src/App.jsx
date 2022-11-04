import React from 'react'
import ContentRoutes from './components/ContentRoutes'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/auth'

import Header from './components/Header'
import Footer from './components/Footer'
import PreHeader from './components/PreHeader'

import './App.css'

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <PreHeader />
          <ContentRoutes />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  )
}

export default App
