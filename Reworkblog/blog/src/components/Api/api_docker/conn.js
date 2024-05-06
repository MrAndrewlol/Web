import pkg from 'pg';
const { Pool } = pkg;

const conn = new  Pool({
    user: process.env.db_user,
    host: process.env.db_host, //SUSTITUIR EL RESTO DE VARIABLES DE ENTORNO
    database: process.env.db_database,
    password: process.env.db_password,
    port: 5432,

})


const getClient = () =>{
  return conn
}

export default getClient;