import { useEffect, useState } from 'react'
import './App.css'
import template from  './assets/template.jpg'
import Routers from './Router/Router'

function App() {

  
  const [rutaActual, setRutaActual] = useState("app")
  const [isHovered,setisHovered ] = useState(false);
  const mouseentra = () => setisHovered(true)
  const mouseseva = () => setisHovered(false)
  
  const [isHoveredContact,setisHoveredC ] = useState(false);
  const mouseentraC = () => setisHoveredC(true)
  const mousesevaC = () => setisHoveredC(false)
  
  const [isHoveredP,setisHoveredP ] = useState(false);
  const mouseentraP = () => setisHoveredP(true)
  const mousesevaP = () => setisHoveredP(false)

  const [isHoveredadminpage,setadmin ] = useState(false);
  const mouseentraadmin = () => setadmin(true)
  const mousesevaadmin = () => setadmin(false)

  useEffect(() => {
    setRutaActual(window.location.pathname)
  }, [])

  
if(localStorage.getItem('Login') === 'true'){


  return (
    <>
    <div className='headsup'>
            <img src={template} className='carrojpg'/>
            <button onMouseEnter={mouseentra} onMouseLeave={mouseseva} onClick={() => { setRutaActual("/") }}  className="mbut" style ={{backgroundColor: isHovered ? '#EDF2F4' : '#8D99AE', color: isHovered ? 'black' : 'black', fontSize:"large"}}  >Home</button>
            <button onMouseEnter={mouseentraC} onMouseLeave={mousesevaC} onClick={() => { setRutaActual("/contact") }}   className="mbut" style ={{backgroundColor: isHoveredContact ? '#EDF2F4' : '#8D99AE', color: isHoveredContact ? 'black' : 'black', padding:"1%" , border:"0px", fontSize:"large"}}  >Contact </button>
            <button onMouseEnter={mouseentraP} onMouseLeave={mousesevaP} onClick={() => { setRutaActual("/admin") }}   className="mbut" style ={{backgroundColor: isHoveredP ? '#EDF2F4' : '#8D99AE', color: isHoveredP ? 'black' : 'black', padding:"1%" , border:"0px", fontSize:"large", marginRight:"1%"}} >Admin</button>
            <button onMouseEnter={mouseentraadmin} onMouseLeave={mousesevaadmin} onClick={() => { setRutaActual("/adminpage") }}   className="mbut" style ={{backgroundColor: isHoveredadminpage ? '#EDF2F4' : '#8D99AE', color: isHoveredadminpage ? 'black' : 'black', padding:"1%" , border:"0px", fontSize:"large", marginRight:"1%"}} >Admin Page</button>
      </div>
    <div className='sitio-web'>
      <div className='paginas'>
          <Routers ruta={rutaActual}></Routers> 
      </div>
    </div>
  </>
  )
}
else{
  return (
    <>
    <div className='headsup'>
            <img src={template} className='carrojpg'/>
            <button onMouseEnter={mouseentra} onMouseLeave={mouseseva} onClick={() => { setRutaActual("/") }}  className="mbut" style ={{backgroundColor: isHovered ? '#EDF2F4' : '#8D99AE', color: isHovered ? 'black' : 'black', fontSize:"large"}}  >Home</button>
            <button onMouseEnter={mouseentraC} onMouseLeave={mousesevaC} onClick={() => { setRutaActual("/contact") }}   className="mbut" style ={{backgroundColor: isHoveredContact ? '#EDF2F4' : '#8D99AE', color: isHoveredContact ? 'black' : 'black', padding:"1%" , border:"0px", fontSize:"large"}}  >Contact </button>
            <button onMouseEnter={mouseentraP} onMouseLeave={mousesevaP} onClick={() => { setRutaActual("/admin") }}   className="mbut" style ={{backgroundColor: setisHoveredC ? '#EDF2F4' : '#8D99AE', color: isHoveredP ? 'black' : 'black', padding:"1%" , border:"0px", fontSize:"large", marginRight:"1%"}} >Admin</button>
      </div>
    <div className='sitio-web'>
      <div className='paginas'>
          <Routers ruta={rutaActual}></Routers> 
      </div>
    </div>
  </>
  )

}
}


export default App