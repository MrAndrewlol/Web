

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


function ListadoUsuarios() {
  const [data, setData] = React.useState([])
  const [estate, setestate] = React.useState(false)

  async function llamarAPI() {

    let chats = await fetch('http://127.0.0.1:3000/posts/')
      let mis_chats = await chats.json()
      setData(mis_chats)
      setestate(true)

  }
  React.useEffect(() => {
      llamarAPI()
  } )

  if(estate === false){
    return (
              <div  style={{backgroundColor:'#b0a18f', marginTop:"2%", height:"30vh", overflowY: "auto" }}>
                <br/>
                <h2 style={{textAlign:'center'}}> Loading </h2>
              </div>
            )
  }
  else{
    return (
      <div>
          <h1 style={{ textAlign:'center'}}>All Blogs Users</h1>
          {data.map(elemento => { return(
        <div key={elemento.id} style={{width:"100%", height:"40vh" , display:"flex", backgroundColor:"#b0a18f", marginBottom:"2%" }} > 
       
        <img src={elemento.imagen} style ={{width: "30%", padding:"0%", marginRight:"1%"}}/>
        
        <div><h4>{elemento.title}</h4>
        <p>{elemento.contenido}</p></div>
            
        </div>
        )
        })}
      </div>
  )

  }
}


ReactDOM.render(
    <Carrazo/>,
    document.getElementById('master')
);

const rootElement = document.getElementById('main');
ReactDOM.render(<ListadoUsuarios />, rootElement);

