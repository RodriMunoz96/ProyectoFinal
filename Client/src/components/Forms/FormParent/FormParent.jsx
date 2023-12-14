import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './formParent.module.css'

const FormParent = () => {
    const dispatch = useDispatch()
    const [ newParent, setNewParent ] = useState({
        idDoc: "", //image
        name: "",
        lastName: "",
        educationLevel: "",
        profession: "",
        address: "",
        jobAddress: "",
        telephone: "",
        jobTelephone: "",
        contactCellPhone: "",
        email: ""
    })

    const onChange = (e) => {
        const { name, value } = e.target
        
        setNewParent({
            ...newParent,
            [name]: value
        })
    }

    const onSubmit = () => {
        // dispatch(registerParent(newParent))

        setNewParent({
            idDoc: "", //image
            name: "",
            lastName: "",
            educationLevel: "",
            profession: "",
            address: "",
            jobAddress: "",
            telephone: "",
            jobTelephone: "",
            contactCellPhone: "",
            email: ""
        })
    }

    return (<>
        <div className={style.container_form}>
            <form onSubmit={onSubmit} className={style.form}>
                <nav className={style.navbar}>
                    <h1>Información general del Apoderado</h1>
                </nav>
                <div className={style.container_label_inputs}>
                    <label htmlFor="id-doc">Documento de identidad:</label>
                    <input value={newParent.idDoc} onChange={onChange} type="text" name='id-doc'/>

                    <label htmlFor="name">Nombre:</label>
                    <input value={newParent.name} onChange={onChange} type="text" name='name'/>

                    <label htmlFor="last-name">Apellido:</label>
                    <input value={newParent.lastName} onChange={onChange} type="text" name='last-name'/>

                    <label htmlFor="education-level">Nivel educacional:</label>
                    <input value={newParent.educationLevel} onChange={onChange} type="text" name='education-level'/>

                    <label htmlFor="profession">Profesión:</label>
                    <input value={newParent.profession} onChange={onChange} type="text" name='profession'/>

                    <label htmlFor="address">Dirección del Hogar:</label>
                    <input value={newParent.address} onChange={onChange} type="text" name='address'/>

                    <label htmlFor="job-address">Dirección del Trabajo: </label>
                    <input value={newParent.jobAddress} onChange={onChange} type="text" name='job-address'/>

                    <label htmlFor="telephone">Télefono del hogar:</label>
                    <input value={newParent.telephone} onChange={onChange} type="number" name='telephone'/>

                    <label htmlFor="job-telephone">Télefono del trabajo:</label>
                    <input value={newParent.jobTelephone} onChange={onChange} type="number" />

                    <label htmlFor="contact-phone">Celular:</label>
                    <input value={newParent.contactCellPhone} onChange={onChange} type="number" name='contact-phone'/>

                    <label htmlFor="email">Email:</label>
                    <input value={newParent.email} onChange={onChange} type="email" />
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    </>);
}
 
export default FormParent;