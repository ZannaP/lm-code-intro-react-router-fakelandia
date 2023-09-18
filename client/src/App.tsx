import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {Router} from './router/router'

function App() {
  const [count, setCount] = useState(0)
  const Home : React.FC = () => <>Home!</>;

  return (
    
    <>
    <Home/>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </>
  )
}

export default App
