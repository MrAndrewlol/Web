import './Home.css'

import Listacontent from './Listadecontenidos.jsx'


function Home() {
    return (
      <div>
          <div>
          <img className='imagencarro' src='https://i.ytimg.com/vi/gAcSYTuzst0/maxresdefault.jpg'></img>
            <h1 className='titulo'>CAR BLOG</h1>
            <Listacontent></Listacontent>
          </div>
          
      </div>
    )
  }
  
  export default Home