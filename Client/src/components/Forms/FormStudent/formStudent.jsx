import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./formParent.module.css";
import { createStudent } from "../../../redux/actions/actions-students";

const FormStudent = () => {
  const dispatch = useDispatch();
  const [newStudent, setNewStudent] = useState({
    idDocumento: "",
    nombres: "",
    apellidoPat: "",
    apellidoMat: "",
    Nacionalidad: "",
    fechNac: "",
    sexo: "",
    peso: "",
    estatura: "",
    alergias: "",
    grupoSanguineo: "",
    contactoEmerg: "",
    fotoPerfil: "",
    fotoDocumento: "",
    state: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(createStudent({ ...newStudent }));

    setNewStudent({
      idDocumento: "",
      nombres: "",
      apellidoPat: "",
      apellidoMat: "",
      Nacionalidad: "",
      fechNac: "",
      sexo: "",
      peso: "",
      estatura: "",
      alergias: "",
      grupoSanguineo: "",
      contactoEmerg: "",
      fotoPerfil: "",
      fotoDocumento: "",
      state: true,
    });
  };

  return (
    <div className={style.container_form}>
      <form onSubmit={onSubmit} className={style.form}>
        <nav className={style.navbar}>
          <h1>Información general del estudiante</h1>
        </nav>
        <div className={style.container_label_inputs}>
          <label htmlFor="idDocumento">Documento de identidad:</label>
          <input
            value={newStudent.idDocumento}
            onChange={handleChange}
            type="text"
            name="idDocumento"
          />

          <label htmlFor="nombres">Nombres:</label>
          <input
            value={newStudent.nombres}
            onChange={handleChange}
            type="text"
            name="nombres"
          />

          <label htmlFor="apellidoPat">Apellido paterno:</label>
          <input
            value={newStudent.apellidoPat}
            onChange={handleChange}
            type="text"
            name="apellidoPat"
          />

          <label htmlFor="apellidoMat">Apellido paterno:</label>
          <input
            value={newStudent.apellidoMat}
            onChange={handleChange}
            type="text"
            name="apellidoMat"
          />

          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <input
            value={newStudent.nacionalidad}
            onChange={handleChange}
            type="text"
            name="nacionalidad"
          />

          <label htmlFor="fechNac">Fecha de nacimiento:</label>
          <input
            value={newStudent.fechNac}
            onChange={handleChange}
            type="date"
            name="fechNac"
          />

          <label htmlFor="sexo">Sexo:</label>
          <select name="sexo" value={newStudent.sexo} onChange={handleChange}>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="undef">Prefiero no decirlo</option>
          </select>

          <label htmlFor="peso">Peso: </label>
          <input
            value={newStudent.peso}
            onChange={handleChange}
            type="number"
            name="peso"
          />
          <label htmlFor="estatura">Estatura: </label>
          <input
            value={newStudent.estatura}
            onChange={handleChange}
            type="number"
            name="estatura"
          />
          <label htmlFor="alergias">Alergias:</label>
          <input
            value={newStudent.alergias}
            onChange={handleChange}
            type="text"
            name="alergias"
          />

          <label htmlFor="grupoSanguineo">Grupo sanguineo:</label>
          <input
            value={newStudent.grupoSanguineo}
            onChange={handleChange}
            type="text"
            name="grupoSanguineo"
          />

          <label htmlFor="contactoEmerg">Contacto de emergencia:</label>
          <input
            value={newStudent.contactoEmerg}
            onChange={handleChange}
            type="number"
            name="contactoEmerg"
          />

          <label htmlFor="fotoPerfil">Foto de perfil:</label>
          <input
            value={newStudent.fotoPerfil}
            onChange={handleChange}
            type="number"
            name="fotoPerfil"
          />

          <label htmlFor="contactoEmerg">Contacto de emergencia:</label>
          <input
            value={newStudent.contactoEmerg}
            onChange={handleChange}
            type="number"
            name="contactoEmerg"
          />
        </div>
        <button type="submit" className={style.submit_button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormStudent;
