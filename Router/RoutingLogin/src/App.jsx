import { useEffect, useState } from 'react'
import './App.css'
import Router from './component/router'

function App() {

  
  const [rutaActual, setRutaActual] = useState("app")

  useEffect(() => {
    console.log("Se ha montado el componente")
    console.log("RUTA ACTUAL: ", window.location.pathname);
    setRutaActual(window.location.pathname)
    console.log(window.location.search);
    
  }, [])

  return (
    <div className='sitio-web'>
      <div className='header'>
        <button onClick={() => { setRutaActual("/") }}>Home</button>
        <button onClick={() => { setRutaActual("/login") }}>Info</button>
      </div>
      <div className='paginas'>
          <Router ruta={rutaActual}></Router> 
      </div>
    </div>
  )
}

export default App