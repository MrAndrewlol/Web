import '../Admin/login.css';
import useLoginForm from './Usarform'; // Assuming the Hook is in a separate file

function Login() {
  const { values, errors, valido, handleChange, handleSubmit } = useLoginForm();

  return (
    <div className='background'>
      <h1>Admin Blog</h1>

      <form onSubmit={handleSubmit}>
        <h3>Nombre</h3>
        <input
          className='loginform'
          onChange={handleChange}
          value={values.user} 
          name="user"
          placeholder='Nombre'
        />
        {errors.user && <p style={{ color: 'red' }}>{errors.user}</p>} {/* Display validation errors conditionally */}
        <h3>Password</h3>
        <input
          className='loginform'
          onChange={handleChange}
          value={values.pass} 
          name="pass" 
          placeholder='Password'
          type="password" 
        />
        {errors.pass && <p style={{ color: 'red' }}>{errors.pass}</p>} {/* Display validation errors conditionally */}
        <p style={{ color: 'red' }}>{valido}</p> {/* Display generic error message */}
      </form>
      <button style={{ marginTop: '10px' }} onClick={handleSubmit}>
        Iniciar Sesion
      </button>
    </div>
  );
}

export default Login;