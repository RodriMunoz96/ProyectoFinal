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
    <>
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

            <label htmlFor="educationLevel">Nivel educacional:</label>
            <input
              value={newStudent.educationLevel}
              onChange={handleChange}
              type="text"
              name="educationLevel"
            />

            <label htmlFor="profession">Profesión:</label>
            <input
              value={newStudent.profession}
              onChange={handleChange}
              type="text"
              name="profession"
            />

            <label htmlFor="address">Dirección del Hogar:</label>
            <input
              value={newStudent.address}
              onChange={handleChange}
              type="text"
              name="address"
            />

            <label htmlFor="jobAddress">Dirección del Trabajo: </label>
            <input
              value={newStudent.jobAddress}
              onChange={handleChange}
              type="text"
              name="jobAddress"
            />

            <label htmlFor="telephone">Télefono del hogar:</label>
            <input
              value={newStudent.telephone}
              onChange={handleChange}
              type="text"
              name="telephone"
            />

            <label htmlFor="jobTelephone">Télefono del trabajo:</label>
            <input
              value={newStudent.jobTelephone}
              onChange={handleChange}
              type="text"
              name="jobTelephone"
            />

            <label htmlFor="contactCellphone">Celular:</label>
            <input
              value={newStudent.contactCellphone}
              onChange={handleChange}
              type="text"
              name="contactCellphone"
            />

            <label htmlFor="email">Email:</label>
            <input
              value={newStudent.email}
              onChange={handleChange}
              type="email"
              name="email"
            />
          </div>
          <button type="submit" className={style.submit_button}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default FormStudent;
