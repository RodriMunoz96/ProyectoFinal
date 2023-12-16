export const validateStudent = (data) => {
    const regexName = /^[a-zA-Z\s]+$/; // Expresión regular para validar el nombre y apellido (solo letras y espacios)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo electrónico
  
    let errors = {}; // Objeto para almacenar errores de validación
  
    // Validación del campo "Nombre"
    if (!data.nombre) errors.nombre = 'Name is required'; // Si el campo está vacío, muestra un error
    else if (data.nombre.length > 20) errors.nombre = 'Name is too long'; // Si el nombre es demasiado largo, muestra un error
    else if (!regexName.test(data.nombre)) errors.nombre = 'Invalid characters in the name'; // Si contiene caracteres no válidos, muestra un error
  
    // Validación del campo "Apellido Paterno"
    if (!data.apellidoPaterno) errors.apellidoPaterno = 'Last name is required'; // Si el campo está vacío, muestra un error
    else if (data.apellidoPaterno.length > 20) errors.apellidoPaterno = 'Last name is too long'; // Si el apellido es demasiado largo, muestra un error
    else if (!regexName.test(data.apellidoPaterno)) errors.apellidoPaterno = 'Invalid characters in the last name'; // Si contiene caracteres no válidos, muestra un error
  
    // Validación del campo "Apellido Materno"
    if (!data.apellidoMaterno) errors.apellidoMaterno = 'Second last name is required'; // Si el campo está vacío, muestra un error
    else if (data.apellidoMaterno.length > 20) errors.apellidoMaterno = 'Second last name is too long'; // Si el apellido materno es demasiado largo, muestra un error
    else if (!regexName.test(data.apellidoMaterno)) errors.apellidoMaterno = 'Invalid characters in the second last name'; // Si contiene caracteres no válidos, muestra un error
  
    // Validación del campo "Correo Electrónico"
    if (!data.email) errors.email = 'Email is required'; // Si el campo está vacío, muestra un error
    else if (!regexEmail.test(data.email)) errors.email = 'Invalid email address'; // Si el correo electrónico no es válido, muestra un error
  
  
    return errors; // Devuelve el objeto de errores de validación
  };
  