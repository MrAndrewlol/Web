import getClient from './conn.js'



const client = getClient()

export async function getAllPosts() {
  try {
    const result = await client.query(
        'SELECT * FROM blogs'
    )
    return result.rows
} catch (err) {
    throw err
}
}

export async function getPosts(id) {
  try {
    const [rows] = await conn.query(`SELECT * FROM blogs WHERE id = ${id};`)
    return rows
  } catch (e) {
    return e
  }
}

export async function createPost(title, carname, model, content, imagen, fecha) {
  try {
    const [rows] = await conn.query(`INSERT INTO blogs (title, nombre_carro, modelo_carro, contenido,  imagen, fecha)  VALUES ('${title}', '${carname}','${model}','${content}', '${imagen}', '${fecha}');`)
    return rows
  } catch (e) {
    return e
  }
}

export async function deletepost(id) {
  try {
    const [rows] = await conn.query(`DELETE FROM blogs WHERE id = ${id};`)
    return rows
  } catch (e) {
    return e
  }
}

export async function putpost(id, title, carname, model, content, imagen, fecha) {
  try {
    const [rows] = await conn.query(` UPDATE blogs SET title = '${title}', nombre_carro = '${carname}', modelo_carro = '${model}' ,contenido = '${content}', fecha = '${fecha}' , imagen = '${imagen}' WHERE id = '${id}';`)
    return rows
  } catch (e) {
    return e
  }
}
