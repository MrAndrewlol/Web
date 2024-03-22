function Contenido() {
    return (
     <div style={{display:"flex", backgroundColor:"#91a566", height:"90vh"}}>
        <div id="carta"></div>
     </div>
    )

}


ReactDOM.render(
    <Contenido/>,
    document.getElementById('conten')
);