import pkg from 'pg';
const { Pool } = pkg;

const conn = new  Pool({
  url: 
  database: 'carblog'

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