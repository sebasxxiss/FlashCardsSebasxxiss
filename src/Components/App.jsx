import '../App.css'
import ProgressBar from './ProgressBar'
import Card from './Card'
import { StateContext } from '../State.jsx'
import { useState } from 'react'

function App() {

  const [item,setItem]=useState(0)

  return (
    <>
      <StateContext.Provider value={{item,setItem}}>
      <main id='Container'>
        <h1>Flash Cards</h1>
        <ProgressBar/>
        <Card/>
      </main>
      </StateContext.Provider>
    </>
  )
}

export default App
