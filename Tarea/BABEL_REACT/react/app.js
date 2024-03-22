
const DOM = document
DOM.body.style.backgroundColor="black"



function APP() {
    return (
        <div style={{ width:"100%",height:"100%", margin:"0px",backgroundColor:"#bed084", display:"flex", flexWrap: "wrap"}}>
            <div id="sidebar" style={{flex:"20%" , height:"100vh"}}>  </div>
            <div style={{flex:"80%",height:"100vh"}}>
                <div id = "header"></div>
                <div  id = "conten" >
                </div>
            </div>
            
        </div>
    );
}


ReactDOM.render(
    <APP/>,
    document.getElementById('main')
);
