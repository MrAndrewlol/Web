import { useEffect, useState } from "react"
import Router from '../component/router'
import Home from '../view/info'

function Login() {

    const [correo, setcorreo] = useState()

    const [pass, setpass] = useState()

    const handlecorreo = (event) => {
        setcorreo(event.target.value)
    }
    const handlepass = (event) => {
        setpass(event.target.value)

    }

    const click = () => {
        window.location.replace(`/?correo=${correo}&password=${pass}`)

    }


    return (
        <div> 
            <div>
            <h4 style={{fontSize:'30px'}} >Correo Electronico</h4>
            <input style={{fontSize:'20px'}} value={correo}  onChange={handlecorreo} placeholder="Correo Electronico"></input>
            <h4 style={{fontSize:'30px'}}>Password</h4>
            <input style={{fontSize:'20px'}}  value={pass} onChange={handlepass} placeholder="Password"></input>
            </div>
            <button style={{marginTop:'20px'}} onClick={click}
            >Regresar a inicio de sesion</button>
           
        </div>
    )
}

export default Login