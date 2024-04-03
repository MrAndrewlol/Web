document.body.style.backgroundColor = '#fbeed3'



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



function Info(props){
  
  return(
  <div>
  <h1 style={{textAlign:"center"}}>Datos no diponible</h1>
  <h3>Nombre:{props.nombre}</h3>
  <h3>Telefono:{props.numero}</h3>
  <h3>Correo:{props.correo}</h3>
  </div>
  )

  

}

ReactDOM.render(
  <Carrazo/>,
  document.getElementById('princi')
);



ReactDOM.render(
  <Info nombre={"JJ"} numero={"1800-non"} correo={"cars2@gmail.com"}  />,
  document.getElementById('contacto')
);