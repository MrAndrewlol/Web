// Recibe la ruta y renderiza el componente

import Login from "../view/Login"
import Home from "../view/info"

function Router({ ruta }) {


    switch (ruta) {
        case "/":
            return <Home ></Home>
        case "/login":
            return <Login></Login> 
        default:
            return (
                <div>
                    <h1>Bienvenido</h1>
                    
                </div>
            )
    }
}

export default Router