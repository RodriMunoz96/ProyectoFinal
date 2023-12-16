export const validateStudentForm = (data) => {
    const regexName = /^[a-zA-Z\s]+$/; // Expresión regular para validar el nombre (solo letras y espacios)
    let errors = {}; // Objeto para almacenar errores de validación
  
    // Validación del campo "Nombre" (Nombre del estudiante)
    if (!data.Nombre) errors.Nombre = 'Student name is required'; // Si el campo está vacío, muestra un error
    else if (data.Nombre.length > 20) errors.Nombre = 'Name is too long'; // Si el nombre es demasiado largo, muestra un error
    else if (!regexName.test(data.Nombre)) errors.Nombre = 'You can only use letters'; // Si contiene caracteres no válidos, muestra un error
  
    // Validación del campo "Edad" (Edad del estudiante)
    if (!data.Edad) errors.Edad = 'Age is required'; // Si el campo está vacío, muestra un error
    else if (isNaN(data.Edad) || data.Edad <= 0) errors.Edad = 'Invalid age'; // Si no es un número válido o es menor o igual a cero, muestra un error
  
    return errors; // Devuelve el objeto de errores de validación
  };
  