
import conn from './conn.js'

export async function getAllPosts() {
    try {
        const [rows] = await conn.query('SELECT * FROM blogs')
        return rows

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function getPosts(id) {
    try{
        console.log(id)
        const [rows] = await conn.query(`SELECT * FROM blogs WHERE id = ${id}`)
        return rows
    }catch(e){
        console.log(e)
        return e
    }

}  

export async function createPost(title, content) {
    try {
        const [rows] = await conn.query(`INSERT INTO blogs (title, content) VALUES ('${title}', '${content}')`)
        return rows

    } catch (e) {
        console.log(e)
        return e
    }
 }


export async function deletepost(id) {
    try {
        const [rows] = await conn.query(`DELETE FROM blogs WHERE id = ${id}`)
        return rows

    } catch (e) {
        console.log(e)
        return e
    }
}

export async function putpost(id, title ,content) {
    try {
        const [rows] = await conn.query(` UPDATE blogs SET title = '${title}', content = '${content}' WHERE id = '${id}'`)
        return rows

    } catch (e) {
        console.log(e)
        return e
    }
}
