import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/router'
import Nav from './router/nav-link'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
    </>
  )
}

export default App
