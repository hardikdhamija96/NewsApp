import { useState } from 'react'
import './App.css'
import SearchTagContainer from './components/SearchTagContainer'
import NewsContainer from './components/NewsContainer'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <h1>Jolt</h1>
      <h2>Jolt Your World with News.</h2>
      <SearchTagContainer/>
      <input type="text" />

      <NewsContainer/>
      <Footer/>

    </>
  )
}

export default App
