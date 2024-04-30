import { useState, useEffect } from "react"
import { conseguirPost } from "../Api/api_docker/controlador";


function Adminpage() {

  const [data, setdata] = useState([])

  useEffect(() => {
    // Update the document title using the browser API
    const datos = conseguirPost()
    setdata(datos)
    console.log(datos)
    console.log(data)
  },[]);

    return (
      <div>
          <h1>Main-Page</h1>

          
          
      </div>
    )
  }
  
  export default Adminpage