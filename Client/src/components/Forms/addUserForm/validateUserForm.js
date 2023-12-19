const validate = (input) => {
  let errors = {};
  let regexNumberSimbols = /[0-9!@#$%^&*()_+{}\\[\]:;<>,.?~\\/\\-]/;
  let validateEmail = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  let validatePassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

  if (!input.username) errors.username = "Escriba un usuario";
  if (input.username.length > 25)
    errors.username = "Deben ser menos de 25 caracteres";

  if (input.email.length === 0) errors.email = "Por favor ingrese un email";
  if (!validateEmail.test(input.email))
    errors.email = "El email ingresado no es válido";

  if (!validatePassword.test(input.password))
    errors.password =
      "La contraseña debe incluir al menos 1 minúscula, 1 mayúscula, 1 número y contener entre 6 y 20 caracteres";

  if (!input.nombre) errors.nombre = "Escriba un nombre";
  if (input.nombre.length > 20)
    errors.nombre = "Deben ser menos de 20 caracteres";
  if (regexNumberSimbols.test(input.nombre))
    errors.nombre = "No puede contener números o símbolos";

  if (!input.apellidoPaterno) errors.apellidoPaterno = "Escriba un nombre";
  if (input.apellidoPaterno.length > 20)
    errors.apellidoPaterno = "Deben ser menos de 20 caracteres";
  if (regexNumberSimbols.test(input.apellidoPaterno))
    errors.apellidoPaterno = "No puede contener números o símbolos";

  if (!input.apellidoMaterno) errors.apellidoMaterno = "Escriba un nombre";
  if (input.apellidoMaterno.length > 20)
    errors.apellidoMaterno = "Deben ser menos de 20 caracteres";
  if (regexNumberSimbols.test(input.apellidoMaterno))
    errors.apellidoMaterno = "No puede contener números o símbolos";

  return errors;
};

export default validate;
