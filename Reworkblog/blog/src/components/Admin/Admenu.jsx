import { useState, useEffect } from "react"
import { conseguirPost, editarpost, eliminarunpost } from "../Api/api_docker/controlador";
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import './Admenu.css'


function Adminpage() {

  const day = new Date()



  const [data, setdata] = useState([])
  const [title, setitle] = useState()
  const [nombre_carro, setnombrecar] = useState()
  const [modelo_carro, setmodelo] = useState()
  const [contenido, setcontenido] = useState()
  const [imagen, setimagen] = useState()

  const handletitle = (event) => {
    setitle(event.target.value)
  }

  const handlenombrecar = (event) => {
    setnombrecar(event.target.value)
  }

  const handlemodelo = (event) => {
    setmodelo(event.target.value)
  }

  const handlecontenido = (event) => {
    setcontenido(event.target.value)
  }

  const handleimagen = (event) => {
    setimagen(event.target.value)
  }


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await conseguirPost();
        setdata(fetchedPosts); // Update state with fetched data
        console.log(data); // Log the data after it's set in state (optional)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array: fetch data only on initial render


  const removeItem = (key) => {
    setdata(data.filter((elemento) => elemento.id !== key))
    eliminarunpost(key)

  };

  const updateItemContent = (key, newContent, newTitle, newModleo, nombre_carro ,newimagen, newdate) => {
    setdata(
      data.map((elemento) => (elemento.id === key ? { ...elemento, contenido: newContent, title: newTitle, modelo_carro: newModleo, nombre_carro: nombre_carro ,imagen: newimagen, fecha: newdate } : elemento))
    );
    editarpost( key, title, nombre_carro, modelo_carro, contenido, imagen )

  };
    if (localStorage.getItem("Login") === "true"){
      return (

        <>
        <h1>Main-Page</h1>
        <div className="wholes">
  
            {data.map(elemento => { return(
          <div key={elemento.id} style={{margin:'2%'}} > 
         
            <Popover placement="top" showArrow={true}>
            <PopoverTrigger >
              <button className='mainfoto' style={{backgroundImage:`url(${elemento.imagen})`, margin:'4%'}}><p className="backtext" >{elemento.title}</p><p className="backtext"  >Modelo:{elemento.nombre_carro}  {elemento.modelo_carro}</p></button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="main-pp" >
                <p style={{maxWidth:'80vw'}}>{elemento.contenido}</p>
                <p style={{textAlign:'right'}}>{elemento.fecha}</p>
                <button className="acentrars" onClick={() => removeItem(elemento.id)}>Eliminar</button>
                <br></br>
                <div className="inputs">
                <div className="clasi">
                Titulo:
                  <input className="disinp" onChange={handletitle} placeholder="eg. El clasico"></input>
                Nombre del Carro:
                  <input className="disinp" onChange={handlenombrecar} placeholder="eg. BMW M4"></input>
                Modelo del Carro:
                  <input className="disinp" onChange={handlemodelo} placeholder="eg. 2024"></input>
                Descripcion del Carro:
                  <textarea className="disinp" onChange={handlecontenido} placeholder="Eg. El mejor carro de todos"></textarea>
                  Link del Carro:
                <textarea className="disinp"  onChange={handleimagen} placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cI8du58seUd0y1LGBMhE1KCMqUApWaWeq0vL7nLIKg&s"></textarea>
                  
  
                </div>
                <button className="acentrars" onClick={() => updateItemContent(elemento.id, contenido ,title, modelo_carro, nombre_carro, imagen ,day.getFullYear()+"-"+ day.getMonth()+1 +"-"+ day.getDate() )}>Editar</button>
                </div>
              
              </div>
            </PopoverContent>
          </Popover>
          </div>
          )
          })}
        </div>
        </>
      )

    }
    else{
      return(
      <div><h1 style={{margin:'15vh'}}> Movimiento Ilegal se necesita Usuario y Password de Admin </h1></div>
      )
    }
    
  }
  
  export default Adminpage


// {
    // "id": 1,
    // "title": "Nombres De Los Carros Teslas Son Raros",
    // "nombre_carro": "Model S,E,X,Y",
    // "modelo_carro": "2024",
    // "contenido": "De acuerdo con Elon Musk sus carros al juntar sus modelos se convierte en SEXY",
    // "imagen": "",
    // "fecha": null
//   },


// const datos = [
    //   {
    //     "id": 1,
    //     "title": "Nombres De Los Carros Teslas Son Raros",
    //     "nombre_carro": "Model S,E,X,Y",
    //     "modelo_carro": "2024",
    //     "contenido": "De acuerdo con Elon Musk sus carros al juntar sus modelos se convierte en SEXY",
    //     "imagen": "",
    //     "fecha": "2024-04-04"
    //   },
    //   {
    //     "id": 2,
    //     "title": "BMW",
    //     "nombre_carro": "M5",
    //     "modelo_carro": "2024",
    //     "contenido": "VROOM",
    //     "imagen": "https://images.hgmsites.net/med/2021-bmw-5-series_100749425_m.jpg",
    //     "fecha": "2024-04-01"
    //   },
    //   {
    //     "id": 3,
    //     "title": "Rayo Maqueen",
    //     "nombre_carro": "Corvette",
    //     "modelo_carro": "2024",
    //     "contenido": "VROOM",
    //     "imagen": "https://static.motor.es/fotos-noticias/2020/03/que-coche-es-rayo-mcqueen-202066150-1585635516_1.jpg",
    //     "fecha": "2024-04-01"
    //   }
    
    //]