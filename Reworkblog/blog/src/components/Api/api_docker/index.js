import express from 'express'
import fs from 'fs'
import cors from 'cors'

import {
  getAllPosts, getPosts, createPost, deletepost, putpost,
} from './db.js'

const app = express()
const port = 3000

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

let data = ''
// Data which will write in a file.

app.listen(port, () => {
  console.log('Listening to http://127.0.0.1:'+ port)
})

app.use(express.json())

app.get('/posts', async (req, res) => {
  fs.readFile('log.txt', 'utf-8', (error, datos) => {
    if (!error) {
      data = `${datos}`
    }
  })

  const posts = await getAllPosts()

  res.json(posts)

  try{
    const dia = new Date()

  data = `${data}\n Fecha: ${dia}\n Mostrar, Endpoint: http://127.0.0.1:3000/posts \n${JSON.stringify(posts)}`

  fs.writeFile('log.txt', (data), (err) => {
    if (err) throw err
  })
  } catch(err){
  }
})

app.get('/posts/:id', async (req, res) => {
  fs.readFile('log.txt', 'utf-8', (error, datos) => {
    if (!error) {
      data = `${datos}`
    }
  })
  const { id } = req.params
  const posts = await getPosts(id)
  res.json(posts)

  try{
    const dia = new Date()

    data = `${data}\n Fecha: ${dia}\n Mostrar, Endpoint: http://127.0.0.1:3000/${id} \n${JSON.stringify(posts)}`
  
    fs.writeFile('log.txt', (data), (err) => {
      if (err) throw err
    })
  }catch(err){
  }

})

app.post('/posts', async (req, res) => {
  const [title, nombrecarro, modelocarro, content] = [req.body.title,
    req.body.nombre_carro, req.body.modelo_carro, req.body.contenido]
  let { imagen } = req.body
  if (imagen === 'undefined') {
    imagen = null
  }
  fs.readFile('log.txt', 'utf-8', (error, datos) => {
    if (!error) {
      data = `${datos}`
    }
  })

  const blogs = await createPost(title, nombrecarro, modelocarro, content, imagen)
  res.json(blogs)

  try{
    const dia = new Date()

    data = `${data}\n Fecha: ${dia}\n Ingresar un elemento, Endpoint: http://127.0.0.1:3000/:postid \n
    title:${title} , nombrecarro: ${nombrecarro},modelocarro: ${modelocarro}, content: ${content}, imagen: ${imagen}`
  
    fs.writeFile('log.txt', (data), (err) => {
      if (err) throw err
    })
  }
  catch(err){
  }
})

app.delete('/posts/:id', async (req, res) => {
  fs.readFile('log.txt', 'utf-8', (error, datos) => {
    if (!error) {
      data = `${datos}`
    }
  })

  const { id } = req.params
  const result = await deletepost(id)
  res.json(result)

  try{
    const dia = new Date()

  data = `${data}\n Fecha: ${dia}\n Eliminar, Endpoint: http://127.0.0.1:3000/${id} \n}`

  fs.writeFile('log.txt', (data), (err) => {
    if (err) throw err
  })
  }catch(error){

  }
})

app.put('/posts/:id', async (req, res) => {
  fs.readFile('log.txt', 'utf-8', (error, datos) => {
    if (!error) {
      data = `${datos}`
    }
  })

  const { id } = req.params
  const [title, nombrecarro, modelocarro, content] = [req.body.title,
    req.body.nombre_carro, req.body.modelo_carro, req.body.contenido]
  let { imagen } = req.body.imagen
  if (imagen === 'undefined') {
    imagen = null
  }
  const result = await putpost(id, title, nombrecarro, modelocarro, content, imagen)
  res.json(result)
  
  try{
  const dia = new Date()
  data = `${data}\n Fecha: ${dia}\n Eliminar, Endpoint: http://127.0.0.1:3000/${id} \n
  title:${title} , nombrecarro: ${nombrecarro},modelocarro: ${modelocarro}, content: ${content}, imagen: ${imagen}`

  fs.writeFile('log.txt', (data), (err) => {
    if (err) throw err
  })

  }catch(err){
    
  }

})

//Babel pero en nuestro codigo?