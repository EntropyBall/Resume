import { useState } from 'react'
import './App.css'
import Header from './Header'
import Contact from './Contact'
import Experience from './Experience'

function App() {

  return (
    <>
      {/* Title */}
      <Header />
      {/* Information */}
      <Contact />
      {/* Experiences */}
      <Experience />
      {/* Formation */}
      <section>Dipl&ocirc;mes</section>
      {/* Skills */}
      <section>Comp&eacute;tences</section>
      {/* Interest */}
      <footer>Centre d'int&eacute;r&ecirc;ts</footer>
    </>
  )
}

export default App
