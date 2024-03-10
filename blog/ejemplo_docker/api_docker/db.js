import conn from './conn.js'

export async function getAllPosts() {
  try {
    const [rows] = await conn.query('SELECT * FROM blogs')

    return rows
  } catch (e) {
    return e
  }
}

export async function getPosts(id) {
  try {
    const [rows] = await conn.query(`SELECT * FROM blogs WHERE id = ${id}`)
    return rows
  } catch (e) {
    return e
  }
}

export async function createPost(title, carname, model, content, imagen) {
  try {
    const [rows] = await conn.query(`INSERT INTO blogs (title, nombre_carro, modelo_carro, contenido,  imagen)  VALUES ('${title}', '${carname}','${model}','${content}', '${imagen}')`)
    return rows
  } catch (e) {
    return e
  }
}

export async function deletepost(id) {
  try {
    const [rows] = await conn.query(`DELETE FROM blogs WHERE id = ${id}`)
    return rows
  } catch (e) {
    return e
  }
}

export async function putpost(id, title, carname, model, content, imagen) {
  try {
    const [rows] = await conn.query(` UPDATE blogs SET title = '${title}', nombre_carro = '${carname}', modelo_carro = '${model}' ,contenido = '${content}', imagen = '${imagen}' WHERE id = '${id}'`)
    return rows
  } catch (e) {
    return e
  }
}
