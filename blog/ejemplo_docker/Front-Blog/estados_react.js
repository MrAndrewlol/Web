

// Cosas que hacer 
// Modificar base de datos para relacionar el id como comentarios


function Loading(){
    const [loadingText, setLoadingText] = React.useState('Loading'); // Initial state

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      // Update loadingText state to alternate between "Loading" and "Loading..."
      setLoadingText(prevText => (prevText === 'Loading' ? 'Loading..' : 'Loading....'));
    }, 2000); // Update interval in milliseconds (2 seconds in this case)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {loadingText}
    </div>
  );

}

document.body.style.backgroundColor = '#fbeed3'
//Menu top
function Carrazo(){


   const [isHovered,setisHovered ] = React.useState(false);
   const mouseentra = () => setisHovered(true)
   const mouseseva = () => setisHovered(false)
   
   const [isHoveredContact,setisHoveredC ] = React.useState(false);
   const mouseentraC = () => setisHoveredC(true)
   const mousesevaC = () => setisHoveredC(false)
   
   const [isHoveredP,setisHoveredP ] = React.useState(false);
   const mouseentraP = () => setisHoveredP(true)
   const mousesevaP = () => setisHoveredP(false)

   const redirectC = () =>{
        window.location.href = 'Contact.html'
   }

   const redirecthome = () =>{
    window.location.href = 'index.html'
    }
    
    const redirectpages = () =>{
        window.location.href = 'allposts.html'
        }

    return(
        <div style ={{ width:"100%", backgroundColor:"#dfcdb4" ,display:"flex",borderBottom: "1px solid black" }}>
        <img src={'template.jpg'} style ={{width: "5%", height: "5%", marginLeft:"1%", marginBottom:"1%" ,marginTop:"1%", marginRight:"40%", borderRadius:"100%" }}/>
        <button onMouseEnter={mouseentra} onMouseLeave={mouseseva}  id="home" style ={{width:"20%",backgroundColor: isHovered ? '#6b5d4d' : '#dfcdb4', color: isHovered ? 'black' : 'black' , padding:"1%" , border:"0px", fontSize:"large"}} onClick={redirecthome} >Home</button>
        <button onMouseEnter={mouseentraC} onMouseLeave={mousesevaC}   id="contact" style ={{width:"20%",backgroundColor: isHoveredContact ? '#6b5d4d' : '#dfcdb4', color: isHoveredContact ? 'black' : 'black', padding:"1%" , border:"0px", fontSize:"large"}} onClick={redirectC} >Contact </button>
        <button onMouseEnter={mouseentraP} onMouseLeave={mousesevaP}   id="pages" style ={{width:"20%",backgroundColor: isHoveredP ? '#6b5d4d' : '#dfcdb4', color: isHoveredP ? 'black' : 'black', padding:"1%" , border:"0px", fontSize:"large"}} onClick={redirectpages} >All Blogs</button>
        </div>
    );

    // Agregar cuando realizas un hover pues se cambia a otro color con opacidad muy baja
}


function Recentopinion(){

    const [data, setData] = React.useState([])
    const [estate, setestate] = React.useState(false)
  
    async function llamarAPI() {

        let chats = await fetch('http://127.0.0.1:3000/posts/2')
          let mis_chats = await chats.json()
          setData(mis_chats)
          setestate(true)
      }
      React.useEffect(() => {
          llamarAPI()
      } )


    return(
        <div style = {{display:"flex", marginTop:"10%", marginRight:"1%" ,textAlign:"justify", width:"100%" }} >
        {data.map(elemento => { return(
        <div key={elemento.id} style={{width:"75%", display:"flex" }} > 
       
        <img src={elemento.imagen} style ={{width: "30%", padding:"0%", marginRight:"1%"}}/>
        
        <div><h4>{elemento.title}</h4>
        <p>{elemento.contenido}</p></div>
            
        </div>
        )
        })}
    
        <div style = {{  width:"25%" ,marginLeft:"2%", backgroundColor:'#dfcdb4', padding:"1%", borderRadius:"15%", border:"1px solid #429398"}}>   
        <h4 style = {{textAlign:"center"}} >Comenta tu opinion</h4>
        {/* <p> <input style={{width:"100%", textAlign:"center"}} placeholder="Titulo" id="titulo"></input></p> TITULO ES EL MISMO POR LO TANTO LOS COMENTARIOS VAN A SER CON ID DEL QUE PERTENECE */}
        <p><input style={{width:"100%", textAlign:"center", margin:"1%"}}  placeholder="Nombre del carro " id="carname"></input></p>
        <p><textarea style={{width:"100%", height:"5vh", maxWidth:"100%", margin:"1%"}}  placeholder="Descripcion" id="content"></textarea></p>
        {/* <p><input  style={{width:"100%"}} placeholder= "Imagen del carro " id="image"></input></p> */}
        <button style={{textAlign:"center", height:'30px' ,marginLeft:"25%"}}>Enviar opinion</button>
        </div>
        </div>
        // Seleccionar imagenes pero en base 64
    );

}

// #Utilizar los props
 function OtherRandomopinions(){
    
    const [data, setData] = React.useState([])
    const [estate, setestate] = React.useState(true)

  
    async function llamarAPI() {

        let chats = await fetch('http://127.0.0.1:3000/posts/1')
          let mis_chats = await chats.json()
          setData(mis_chats)
          setestate(false)
      }
      React.useEffect(() => {
          llamarAPI()
      } )

    if(estate == false){
        return(
            <div  style={{backgroundColor:'#b0a18f', marginTop:"2%", height:"30vh", overflowY: "auto" }}>
            <h3 style={{textAlign:"center"}} >⬑ Comentarios ⬏</h3>

            {data.map(elemento => { return(
    
            <div key={elemento.id} style={{display:"flex", marginRight:"1%" ,textAlign:"justify", width:"100%", backgroundColor:"#b0a18f" }}>


            <h4 style={{width:"15%", margin:"5%" }} >{elemento.title}</h4>
            <p style={{width:"55%", marginRight:"1%"}} >{elemento.contenido}</p>
            </div>
            )
            })}

            
    
            </div>
    
        )    
    }

    if(estate == true){
        return (
            <div  style={{backgroundColor:'#b0a18f', marginTop:"2%", height:"30vh", overflowY: "auto" }}>
            <br/>
            <h2 style={{textAlign:'center'}}> Uh OH! </h2>
            <p style={{textAlign:'center'}}>Es probable que la llamada a la API no se encuentra disponible.</p>
            </div>
        )
    }
    

}

function Title(props){
    return (
        <div style={{textAlign:"center"}}><h1>{props.title}</h1></div>
    )
}


ReactDOM.render(
    <Carrazo/>,
    document.getElementById('master')
);


ReactDOM.render(
    <Title title="Explora los blogs que tu deseas!"/>,
    document.getElementById('titul')
);


const rootElement = document.getElementById('recent');
ReactDOM.render(<Recentopinion />, rootElement);



const rootElementt = document.getElementById('comentario');
ReactDOM.render(<OtherRandomopinions />, rootElementt);



ReactDOM.render(
    document.getElementById('prueba'),
    <Loading    />
);

// Colores: https://paletadecolores.com.mx/paleta/429398/6b5d4d/b0a18f/dfcdb4/fbeed3/


