

function Carrazo(){
    return(
        <div style ={{ width:"100%", backgroundColor:"#dfcdb4" ,display:"flex",borderBottom: "1px solid black" }}>
        <img src={'template.jpg'} style ={{width: "5%", height: "5%", marginLeft:"1%", marginBottom:"1%" ,marginTop:"1%", marginRight:"40%", borderRadius:"100%" }}/>
        <button  id="home" style ={{width:"20%",backgroundColor:'#dfcdb4', margin:"1%" , border:"0px", fontSize:"large"}} >Home</button>
        <button  id="contact" style ={{width:"20%",backgroundColor:'#dfcdb4', margin:"1%" , border:"0px", fontSize:"large"}} >Contact </button>
        <button  id="pages" style ={{width:"20%",backgroundColor:'#dfcdb4', margin:"1%" , border:"0px", fontSize:"large"}} >Pages</button>
        </div>
    );

    // Agregar cuando realizas un hover pues se cambia a otro color con opacidad muy baja
}


function Recentopinion(){
    return(

        <div style = {{display:"flex", marginTop:"10%", marginRight:"1%" ,textAlign:"justify", width:"100%" }} >
        <div style={{width:"75%", display:"flex" }} > 
        <img src={'https://hips.hearstapps.com/hmg-prod/images/2020-ford-gt-110-1580930617.jpg?crop=0.899xw:1.00xh;0.0554xw,0&resize=768:*'} style ={{width: "30%", padding:"0%", marginRight:"1%"}}/>
        
        <p style ={{textAlign:"justify" ,width:"70%" }}><h4>Ford GT aeredinamico del siglo</h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
        
        <div style = {{  width:"25%" ,marginLeft:"2%", backgroundColor:'#dfcdb4', padding:"1%", borderRadius:"15%", border:"1px solid #429398"}}>   
        <h4 style = {{textAlign:"center"}} >Commenta tu opinion</h4>
        <p> <input style={{width:"100%", textAlign:"center"}} placeholder="Titulo" id="titulo"></input></p>
        <p><input style={{width:"100%", textAlign:"center"}}  placeholder="Nombre del carro " id="carname"></input></p>
        <p><textarea style={{width:"100%", height:"5vh"}}  placeholder="Descripcion" id="content"></textarea></p>
        <p><input  style={{width:"100%"}} placeholder= "Imagen del carro " id="image"></input></p>
        <button style={{textAlign:"center", marginLeft:"50%"}}>Enviar opinion</button>
        </div>
        </div>
        // Seleccionar imagenes pero en base 64
    );


}

// #Utilizar los props
 function OtherRandomopinions(){




    return(
        <div  style={{backgroundColor:'#b0a18f', marginTop:"2%", height:"30vh", overflowY: "auto" }}>
        <h3 style={{textAlign:"center"}} >⬑ Comentarios ⬏</h3>
        <div style={{display:"flex", marginRight:"1%" ,textAlign:"justify", width:"100%", backgroundColor:"#cb0a18f" }}>
        <h4 style={{width:"15%", margin:"5%", marginTop:"12%" }} >Maclaren P1</h4>
        <p style={{width:"55%", marginRight:"1%"}} >Lorem Ipsum is simply dummy text of the printing
         and typesetting industry. Lorem Ipsum has been the 
         industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and 
         scrambled it to make a type specimen book. It has survived not only 
         five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with 
          the release of Letraset sheets containing Lorem Ipsum passages, and more 
          recently with desktop publishing software like Aldus PageMaker including versions
           of Lorem Ipsum.</p>
        
           <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QNohJw_sKNu_qUIvAhIwpbL3VzeJgtlXjA9ANDAWUg&s'} style ={{width: "30%", padding:"0%", margin:"1%"}}/>

        </div>

        <div style={{display:"flex", marginRight:"1%" ,textAlign:"justify", width:"100%", backgroundColor:"#b0a18f" }}>
        <h4 style={{width:"15%", margin:"5%", marginTop:"12%" }} >Maclaren P1</h4>
        <p style={{width:"55%", marginRight:"1%"}} >Lorem Ipsum is simply dummy text of the printing
         and typesetting industry. Lorem Ipsum has been the 
         industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and 
         scrambled it to make a type specimen book. It has survived not only 
         five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with 
          the release of Letraset sheets containing Lorem Ipsum passages, and more 
          recently with desktop publishing software like Aldus PageMaker including versions
           of Lorem Ipsum.</p>
        
           <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QNohJw_sKNu_qUIvAhIwpbL3VzeJgtlXjA9ANDAWUg&s'} style ={{width: "30%", padding:"0%", margin:"1%"}}/>

        </div>

        </div>

    );

}


ReactDOM.render(
    <Carrazo/>,
    document.getElementById('master')
);



ReactDOM.render(
    <Recentopinion/>,
    document.getElementById('recent')
);

ReactDOM.render(
    <OtherRandomopinions/>,
    document.getElementById('comentario')
);







// Colores: https://paletadecolores.com.mx/paleta/429398/6b5d4d/b0a18f/dfcdb4/fbeed3/

// // Fetch de la api 
// async function gettingPosts(){
    // let data =  fetch('http://127.0.0.1:3000/posts',
    // {
        // method: 'GET',
        // headers: {
            // 'Content-Type': 'application/json'
        // },
    // })
    // console.log("await", data);
    // let posts = await data.json();
    // console.log(posts);
    // return posts;
// }

