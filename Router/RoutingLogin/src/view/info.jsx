import { useEffect, useState } from "react"
import Router from '../component/router'

function Home() {

    const [correo, setcorreo] = useState("")
    const [pass, setpass] = useState("")

    useEffect(() => {

        if(window.location.search != "" ){
            const url = window.location.search

            try{
                const array = url.split('&')
                setcorreo( array[0].split('=')[1])
                console.log(correo)
                setpass( array[1].split('=')[1])
                console.log(pass)
            }        
            catch{
                console.log('no data')
            }
            
        }
    }, [])

    return (
        <div> 
            <h1>Bienvenido A Nuevas Aventuras</h1>
            <p>Correo: {correo}</p>
            <p>Password Leakeada: {pass} </p>
        </div>
    )
}

export default Home