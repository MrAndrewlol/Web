function Header(props) {
    return (
        <div style={{display:"flex", backgroundColor:"#a88914", height:"10vh"}}>
                <p style={{ marginLeft:"40%"}}>{props.admin}</p>
                <button style={{borderRadius:"100%", marginLeft:"35%" ,padding:"2%", backgroundColor:"#a88914", border: "1px solid #a88914"}}> <img  style={{width:"100%", height:"3vh"}} src="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_1-512.png"></img></button>
                </div>
    )
}


ReactDOM.render(
    <Header admin="Juan el administrador"/>,
    document.getElementById('header')
);
