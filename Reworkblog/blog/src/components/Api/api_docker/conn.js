import pkg from 'pg';
const { Pool } = pkg;

const conn = new  Pool({
  user: process.env.db_user,
  host: process.env.db_host, //SUSTITUIR EL RESTO DE VARIABLES DE ENTORNO
  database: process.env.db_database,
  password: process.env.db_password,
  port: 5432,

})

// const conn = new  Pool({
//   user: 'postgres',
//   host: 'localhost', //SUSTITUIR EL RESTO DE VARIABLES DE ENTORNO
//   database: 'postgres',
//   password: '7536',
//   port: 5432,

// })

conn
	.connect()
	.then(() => {
		console.log('Connected to PostgreSQL database');
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});

const getClient = () =>{
  return conn
}

export default getClient;