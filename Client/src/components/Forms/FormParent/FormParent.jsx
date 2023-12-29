import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./formParent.module.css";
import { createParent } from "../../../redux/actions/actions-parents.js";
import { validation } from "./validation.js";
import { NavLink, useNavigate } from "react-router-dom";

const FormParent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const arrow = '<---'
    const [ errors, setErrors ] = useState({})
    const [ loading, setLoading ] = useState(false)
    const [ image, setImage ] = useState(null)
    const [ newParent, setNewParent ] = useState({
        fotoDocumento: "", //image
        idDoc: "", 
        name: "",
        lastName: "",
        educationLevel: "",
        profession: "",
        address: "",
        jobAddress: "",
        telephone: "",
        jobTelephone: "",
        contactCellphone: "",
        email: "",
        tutor: true,
        // userId: "19302f1a-93d1-4473-a151-c4df39df503c"
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setErrors(validation({
            ...newParent,
            [name]: value
        }))
        setNewParent({
            ...newParent,
            [name]: value
        })
    }

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "nmxly1pm");
        const res = await fetch(
        `https://api.cloudinary.com/v1_1/dxi3fh6kr/image/upload`,
        {
            method: "POST",
            body: data,
        }
        );
        const file = await res.json();
        setImage(file.secure_url);
        setErrors(
        validation({
            ...newParent,
            fotoDocumento: file.secure_url,
        })
        );
        setLoading(true);
        setNewParent({
            ...newParent,
            fotoDocumento: file.secure_url,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createParent({ ...newParent }));

        setErrors({});
        setNewParent({
            fotoDocumento: "", //image
            idDoc: "",
            name: "",
            lastName: "",
            educationLevel: "",
            profession: "",
            address: "",
            jobAddress: "",
            telephone: "",
            jobTelephone: "",
            contactCellphone: "",
            email: "",
            tutor: true,
            // userId: "19302f1a-93d1-4473-a151-c4df39df503c"
        });
        navigate('/viewParent/addNewChild')
    };

  return (
    <>
        <div className={style.container_form}>
            <NavLink to={"/viewParent/addNewChild"} className={style.button_back_home}>
                {arrow} Volver a la página principal
            </NavLink>
            <form onSubmit={onSubmit} className={style.form}>
            <nav className={style.navbar}>
                <h1>Información general del Apoderado</h1>
            </nav>
            <div className={style.container_label_inputs}>
                <div className={style.first_container}>
                <div className={style.first_first_container}>
                    <div className={style.container_image}>
                    {loading && image ? (
                        <>
                        <img
                            src={image}
                            alt="Imagen del Apoderado"
                            className={style.image_parent}
                        />
                        <label
                            htmlFor="imageOutput"
                            className={style.label_image_done}
                        >
                            +
                        </label>
                        <input
                            type="file"
                            id="imageOutput"
                            name="fotoDocumento"
                            onChange={uploadImage}
                        />
                        <br />
                        <p>{errors.fotoDocumento ? errors.fotoDocumento : null}</p>
                        </>
                    ) : (
                        <>
                        <label
                            htmlFor="imageInput"
                            className={style.label_image_undone}
                        >
                            Sube una foto de tu DNI
                        </label>
                        <input
                            type="file"
                            id="imageInput"
                            name="fotoDocumento"
                            onChange={uploadImage}
                        />
                        <br />
                        <p>{errors.fotoDocumento ? errors.fotoDocumento : null}</p>
                        </>
                    )}
                    </div>
                </div>
                <div className={style.second_first_container}>
                    <div className={style.second_first_container_first_line}>
                        <div className={style.container_name}>
                            <label htmlFor="name">Nombre:</label>
                            <input
                            value={newParent.name}
                            onChange={handleChange}
                            type="text"
                            name="name"
                            />
                            <br />
                            <p>{errors.name ? errors.name : null}</p>
                        </div>
                        <div className={style.container_lastName}>
                            <label htmlFor="lastName">Apellido:</label>
                            <input
                            value={newParent.lastName}
                            onChange={handleChange}
                            type="text"
                            name="lastName"
                            />
                            <br />
                            <p>{errors.lastName ? errors.lastName : null}</p>
                        </div>
                    </div>
                    <div className={style.second_first_container_second_line}>
                        <div className={style.container_idDoc}>
                            <label htmlFor="idDoc">Documento de identidad:</label>
                            <input
                            value={newParent.idDoc}
                            onChange={handleChange}
                            type="text"
                            name="idDoc"
                            />
                            <br />
                            <p>
                            {errors.idDoc ? errors.idDoc : null}
                            </p>
                        </div>
                        <div className={style.container_email}>
                            <label htmlFor="email">Email:</label>
                            <input
                            value={newParent.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            />
                            <br />
                            <p>{errors.email ? errors.email : null}</p>
                        </div>
                    </div>
                    <div className={style.second_first_container_third_line}>
                    <div className={style.container_educationLevel}>
                        <label htmlFor="educationLevel">
                        Nivel educacional: (grado)
                        </label>
                        <input
                        value={newParent.educationLevel}
                        onChange={handleChange}
                        type="text"
                        name="educationLevel"
                        />
                        <br />
                        <p>
                        {errors.educationLevel ? errors.educationLevel : null}
                        </p>
                    </div>
                    <div className={style.container_profession}>
                        <label htmlFor="profession">Profesión:</label>
                        <input
                        value={newParent.profession}
                        onChange={handleChange}
                        type="text"
                        name="profession"
                        />
                        <br />
                        <p>{errors.profession ? errors.profession : null}</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className={style.second_container}>
                <div className={style.first_second_container}>
                    <div className={style.container_telephone}>
                    <label htmlFor="telephone">Télefono del hogar:</label>
                    <input
                        value={newParent.telephone}
                        onChange={handleChange}
                        type="text"
                        name="telephone"
                    />
                    <br />
                    <p>{errors.telephone ? errors.telephone : null}</p>
                    </div>
                    <div className={style.container_jobTelephone}>
                    <label htmlFor="jobTelephone">Télefono del trabajo:</label>
                    <input
                        value={newParent.jobTelephone}
                        onChange={handleChange}
                        type="text"
                        name="jobTelephone"
                    />
                    <br />
                    <p>{errors.jobTelephone ? errors.jobTelephone : null}</p>
                    </div>
                    <div className={style.container_contactCellphone}>
                        <label htmlFor="contactCellphone">Celular:</label>
                        <input
                        value={newParent.contactCellphone}
                        onChange={handleChange}
                        type="text"
                        name="contactCellphone"
                        />
                        <br />
                        <p>
                        {errors.contactCellphone ? errors.contactCellphone : null}
                        </p>
                    </div>
                </div>
                <div className={style.second_second_container}>
                    <div className={style.container_address}>
                    <label htmlFor="address">Dirección del Hogar:</label>
                    <input
                        value={newParent.address}
                        onChange={handleChange}
                        type="text"
                        name="address"
                    />
                    <br />
                    <p>{errors.address ? errors.address : null}</p>
                    </div>
                    <div className={style.container_jobAddress}>
                    <label htmlFor="jobAddress">Dirección del Trabajo: </label>
                    <input
                        value={newParent.jobAddress}
                        onChange={handleChange}
                        type="text"
                        name="jobAddress"
                    />
                    <br />
                    <p>{errors.jobAddress ? errors.jobAddress : null}</p>
                    </div>
                </div>
                </div>
            </div>
            <button
                type="submit"
                className={style.submit_button}
                disabled={
                Object.keys(errors).length > 0 ||
                !newParent.fotoDocumento ||
                !newParent.idDoc ||
                !newParent.name ||
                !newParent.lastName ||
                !newParent.educationLevel ||
                !newParent.profession ||
                !newParent.address ||
                !newParent.jobAddress ||
                !newParent.telephone ||
                !newParent.jobTelephone ||
                !newParent.contactCellphone ||
                !newParent.email
                    ? true
                    : false
                }
            >
                Enviar
            </button>
            </form>
        </div>
        </>
    );
};

export default FormParent;
