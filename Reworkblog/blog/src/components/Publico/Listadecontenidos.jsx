
import './Listadoconten.css'
import Contenido from './Content.jsx'
import React, { useState, useEffect } from "react";
import { conseguirPost } from '../Api/api_docker/controlador';

function Listacontent(){


    const [data, setdata] = useState([{
        "id": 1,
        "title": "Nombres De Los Carros Teslas Son Raros",
        "nombre_carro": "Model S,E,X,Y",
        "modelo_carro": "2024",
        "contenido": "De acuerdo con Elon Musk sus carros al juntar sus modelos se convierte en SEXY",
        "imagen": "",
        "fecha": "2024-04-04"
      },
      {
        "id": 2,
        "title": "BMW",
        "nombre_carro": "M5",
        "modelo_carro": "2024",
        "contenido": "VROOM",
        "imagen": "https://images.hgmsites.net/med/2021-bmw-5-series_100749425_m.jpg",
        "fecha": "2024-04-01"
      },
      {
        "id": 3,
        "title": "Rayo Maqueen",
        "nombre_carro": "Corvette",
        "modelo_carro": "2024",
        "contenido": "VROOM",
        "imagen": "https://static.motor.es/fotos-noticias/2020/03/que-coche-es-rayo-mcqueen-202066150-1585635516_1.jpg",
        "fecha": "2024-04-01"
      }])

      useEffect(() => {
        const fetchData = async () => {
          try {
            const fetchedPosts = await conseguirPost();
            setdata(fetchedPosts); // Update state with fetched data
            console.log(data); // Log the data after it's set in state (optional)
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []); // Empty dependency array: fetch data only on initial render
    

    return (
        <div className='estructuralist'>

        {data.map((elemento) => (
            
            <Contenido  id={elemento.id} name={elemento.title} descripcion={elemento.contenido} imagen={elemento.imagen}></Contenido>
        ))}
        

        {/* <Contenido name='El mejor carro de todos, Lindas vistas y todo para la familia' descripcion={datox} imagen='https://hips.hearstapps.com/hmg-prod/images/bmw-x5-2024-1600-03-1675845761.jpg'  ></Contenido>
        <Contenido name='ASH' descripcion={datox} imagen={imagen}></Contenido>
        <Contenido name='Juan' descripcion={datox} imagen='https://hips.hearstapps.com/hmg-prod/images/bmw-x5-2024-1600-03-1675845761.jpg'></Contenido>
        <Contenido name='Juan' descripcion={datox} imagen='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxw2QY5-OW7MCFPlNS2dZ88uCmCG9TiPqo2k941PM5Pg&s'></Contenido>
         */}
        </div>

    )

}



export default Listacontent