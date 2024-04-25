import Adminpage from "../components/Admin/Admenu"
import Login from "../components/Admin/Login"
import Home from "../components/Publico/Homepage"
import PropTypes from 'prop-types'
/* eslint-disable react/prop-types */

function Routers({ ruta }) {
    switch (ruta) {
        case "/": //Main Page
            return <Home></Home>
        case "/admin": //Main Page
            return <Login></Login>
        case "/adminpage": //Main Page
            return <Adminpage></Adminpage>
            
        default:
            return (
                <div>
                    <h1>Bloggin....</h1>
                </div>
            )
    }
}   

Routers.PropTypes ={
    ruta: PropTypes.string
}



export default Routers