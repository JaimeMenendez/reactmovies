import React from 'react'
import { GlobalStyle } from './globalStyles'
import Header from './components/Header'
import Home from './components/home'

function App () {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  )
}

export default App
