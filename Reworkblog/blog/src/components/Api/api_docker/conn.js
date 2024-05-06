import pkg from 'pg';
const { Client } = pkg;

// const conn = new  Client({
//   user: process.env.db_user,
//   host: process.env.db_host, //SUSTITUIR EL RESTO DE VARIABLES DE ENTORNO
//   database: process.env.db_database,
//   password: process.env.db_password,
//   port: 5432,

// })

const conn = new  Client({
  user: 'cars',
  host: 'dpg-cop6d72cn0vc73dn8na0-a', //SUSTITUIR EL RESTO DE VARIABLES DE ENTORNO
  database: 'carblog',
  password: 'OoVoOTUlKSgblmTyRlUvOedU1GPtALRf',
  port: 5432,

})

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