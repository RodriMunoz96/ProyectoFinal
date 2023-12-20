import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./formStudent.module.css";
import { createStudent } from "../../../redux/actions/actions-students";
import validation from "../FormStudent/validation";
//import { Cloudinary } from "@cloudinary/url-gen";

const FormStudent = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({
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
  });
  //const cld = new Cloudinary({ cloud: { cloudName: "dotfhd8de" } });
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

  const handleChange = (event) => {
    setNewStudent((prevNewStudent) => {
      const newNewStudent = {
        ...prevNewStudent,
        [event.target.name]: event.target.value,
      };
      validation(newNewStudent, errors, setErrors, event);
      console.log(newStudent);
      return newNewStudent;
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

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "nmxly1pm");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dotfhd8de/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setErrors(
      validation({
        ...newStudent,
        idDoc: file.secure_url,
      })
    );
    setLoading(true);
    setNewStudent({
      ...newStudent,
      idDoc: file.secure_url,
    });
  };
  return (
    <div className={style.container_form}>
      <form onSubmit={onSubmit} className={style.form}>
        <nav className={style.navbar}>
          <h1>Información general del estudiante</h1>
        </nav>
        <div className={style.container_label_inputs}>
          {loading && image && (
            <>
              <img
                src={image}
                alt="Imagen del estudiante"
                className={style.image_student}
              />
              <label htmlFor="imageOutput" className={style.label_image_done}>
                +
              </label>
              <input
                type="file"
                id="imageOutput"
                name="idDoc"
                onChange={uploadImage}
              />
              <br />
              <p>{errors.idDoc ? errors.idDoc : null}</p>
            </>
          )}

          <label htmlFor="idDocumento">
            Número del documento de identidad:
          </label>

          <input
            value={newStudent.idDocumento}
            onChange={handleChange}
            type="number"
            name="idDocumento"
          />
          <p>{errors.idDocumento ? errors.idDocumento : null}</p>

          <label htmlFor="nombres">Nombres:</label>
          <input
            value={newStudent.nombres}
            onChange={handleChange}
            type="text"
            name="nombres"
          />
          <p>{errors.nombres ? errors.nombres : null}</p>
          <label htmlFor="apellidoPat">Primer apellido:</label>
          <input
            value={newStudent.apellidoPat}
            onChange={handleChange}
            type="text"
            name="apellidoPat"
          />
          <p>{errors.apellidoPat ? errors.apellidoPat : null}</p>

          <label htmlFor="apellidoMat">Segundo apellido:</label>
          <input
            value={newStudent.apellidoMat}
            onChange={handleChange}
            type="text"
            name="apellidoMat"
          />
          <p>{errors.apellidoMat ? errors.apellidoMat : null}</p>

          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <input
            value={newStudent.nacionalidad}
            onChange={handleChange}
            type="text"
            name="nacionalidad"
          />
          <p>{errors.nacionalidad ? errors.nacionalidad : null}</p>

          <label htmlFor="fechNac">Fecha de nacimiento:</label>
          <input
            value={newStudent.fechNac}
            onChange={handleChange}
            type="date"
            name="fechNac"
          />
          <p>{errors.fechNac ? errors.fechNac : null}</p>

          <label htmlFor="sexo">Sexo:</label>
          <select name="sexo" value={newStudent.sexo} onChange={handleChange}>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>

          <label htmlFor="peso">Peso: </label>
          <input
            value={newStudent.peso}
            onChange={handleChange}
            type="number"
            name="peso"
          />
          <p>{errors.peso ? errors.peso : null}</p>
          <label htmlFor="estatura">Estatura: </label>
          <input
            value={newStudent.estatura}
            onChange={handleChange}
            type="number"
            name="estatura"
          />
          <p>{errors.estatura ? errors.estatura : null}</p>

          <label htmlFor="alergias">Alergias:</label>
          <input
            value={newStudent.alergias}
            onChange={handleChange}
            type="text"
            name="alergias"
          />
          <p>{errors.alergias ? errors.alergias : null}</p>

          <label htmlFor="grupoSanguineo">Grupo sanguineo:</label>
          <input
            value={newStudent.grupoSanguineo}
            onChange={handleChange}
            type="text"
            name="grupoSanguineo"
          />
          <p>{errors.grupoSanguineo ? errors.grupoSanguineo : null}</p>

          <label htmlFor="contactoEmerg">Contacto de emergencia:</label>
          <input
            value={newStudent.contactoEmerg}
            onChange={handleChange}
            type="number"
            name="contactoEmerg"
          />
          <p>{errors.contactoEmerg ? errors.contactoEmerg : null}</p>

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
