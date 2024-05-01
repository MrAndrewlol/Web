import './Content.css'
import React from "react";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";

function Contenido(props){

    
    return (
        <div  className="estructuraC">
        <Popover placement="top" showArrow={true}>
      <PopoverTrigger>
        <button className='backfoto' style={{backgroundImage:`url(${props.imagen})`}}><p className='nombret'>{props.name}</p></button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="anima" style={{backgroundColor:'#8D99AE'}}>
          <p style={{maxWidth:'80vw'}}>{props.descripcion}</p>
        </div>
      </PopoverContent>
    </Popover>
            

        </div>
        
        
    )

}



export default Contenido


// {
    // "id": 1,
    // "title": "Nombres De Los Carros Teslas Son Raros",
    // "nombre_carro": "Model S,E,X,Y",
    // "modelo_carro": "2024",
    // "contenido": "De acuerdo con Elon Musk sus carros al juntar sus modelos se convierte en SEXY",
    // "imagen": "",
    // "fecha": null
//   },