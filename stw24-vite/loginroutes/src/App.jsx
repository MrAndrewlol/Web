import { useEffect, useState } from 'react'
import './App.css'
import Router from './Componentes/Router/router'

function App() {
  const [ruta, setruta] = useState("app")


  useEffect(() => {
    console.log("Se ha montado el componente")
    console.log("RUTA ACTUAL: ", window.location.pathname);
    setruta(window.location.pathname)
    console.log(window.location);

  }, [])

  return (
    <>
    <div>
      <h3>Iniciar Sesion</h3>
      <button onClick={() => { setruta("principal") }}>Login</button>
    </div>
    <Router ruta={ruta}></Router>
    </>
  )
}

export default App
