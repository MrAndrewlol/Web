function Carta(props) {
    return (
        <div style={{ width:"50vh", height:"40vh", backgroundColor:"white", margin:"40%", borderRadius:"10%"}}>
                <img style={{backgroundColor:"black", borderRadius:"100%", border:"2px solid black", marginLeft:"39%", marginTop:"5%", width:"10vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQipRO0bfxtr_eAHxbKoamvp6XCk5Gohwj4w&usqp=CAU"></img>
                <p style={{ marginLeft:"2%", marginTop:"10%"}}>Nombre: {props.nombre}</p>
                <p style={{ marginLeft:"2%", marginTop:"10%"}}>Description: {props.descripcion}</p>
                </div>
    )
}


ReactDOM.render(
    <Carta nombre="Andre" descripcion="CALL OUT MY NAME"/>,
    document.getElementById('carta')
);