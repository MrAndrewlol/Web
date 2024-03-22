function Sidebar(props) {
    return (
        <div >
        <p style={{marginTop:"30vh", marginLeft:"2%"}}>Inicio</p>
        <p>{props.info}</p>
        </div>
    )
}


ReactDOM.render(
    <Sidebar info="Informacion unica de un fashionista" />,
    document.getElementById('sidebar')
);