import './styles/main.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'

import React from 'react';


function App() {

  return (
    <main className="home">
      <Header />
      <Hero />
      <Gallery />
    </main>
  )
}

export default App