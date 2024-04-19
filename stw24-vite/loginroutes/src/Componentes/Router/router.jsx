
import Mainlogin from '../Login/Login'


function Router({router}){
    switch(router){
        case "principal":
            return <Mainlogin></Mainlogin>
        default:
                return <div><h1>Ruta de esto {router}</h1></div>
    }
}


export default Router


