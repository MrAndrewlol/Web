import './Content.css'


function Contenido(props){
    return (
        <div  className="estructuraC">
        <button style={{backgroundImage:`url('${props.imagen}')` }} className='backfoto'></button>
        <p className='nombret' >{props.name}</p>
        </div>
    )

}



export default Contenido