import { useState } from 'react';

function useLoginForm() {
  const initialState = {
    user: '',
    pass: '',
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [valido, setValido] = useState(''); // Renamed for consistency

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value }); // Update specific field value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const validationErrors = validate(values); // Implement validation logic
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0 && values.user === 'Andre' && values.pass === '123' ) {

      console.log('Form submitted with valid data:', values);
      window.location.replace(`/adminpage?user=${values.user}&password=${values.pass}`); // Assuming server-side validation
      localStorage.setItem('Login', true);
      setValido(''); 
    } else {

      validationErrors.pass = 'Username es requerido or password es incorrecto';
    }
  };

  // Implement your custom validation logic
  const validate = (data) => {
    const validationErrors = {};
    if (!data.user) {
      validationErrors.user = 'Usuario es requerido';
    }
    if (!data.pass) {
      validationErrors.pass = 'Password es requerido';
    }
    return validationErrors;
  };

  return { values, errors, valido, handleChange, handleSubmit };
}

export default useLoginForm