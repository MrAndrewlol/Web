
import './Listadoconten.css'
import Contenido from './Content.jsx'

function Listacontent(){

    const datox = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    const das = btoa('https://upload.wikimedia.org/wikipedia/commons/c/c6/Paris_Motor_Show_2012_%288065248951%29.jpg')
    const imagen = atob(das)
    console.log(imagen)

    return (
        <div className='estructuralist'>
        <Contenido name='El mejor carro de todos, Lindas vistas y todo para la familia' descripcion={datox} imagen='https://hips.hearstapps.com/hmg-prod/images/bmw-x5-2024-1600-03-1675845761.jpg'  ></Contenido>
        <Contenido name='ASH' descripcion={datox} imagen={imagen}></Contenido>
        <Contenido name='Juan' descripcion={datox} imagen='https://hips.hearstapps.com/hmg-prod/images/bmw-x5-2024-1600-03-1675845761.jpg'></Contenido>
        <Contenido name='Juan' descripcion={datox} imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxw2QY5-OW7MCFPlNS2dZ88uCmCG9TiPqo2k941PM5Pg&s'></Contenido>
        
        </div>

    )

}



export default Listacontent