import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './formParent.module.css'
import { createParent } from '../../../redux/actions/actions-parents.js';

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
        contactCellphone: "",
        email: "",
        tutor: true,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setNewParent({
            ...newParent,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createParent({...newParent}))

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
            contactCellphone: "",
            email: "",
            tutor: true
        })
    }

    return (<>
        <div className={style.container_form}>
            <form onSubmit={onSubmit} className={style.form}>
                <nav className={style.navbar}>
                    <h1>Información general del Apoderado</h1>
                </nav>
                <div className={style.container_label_inputs}>
                    <label htmlFor="idDoc">Documento de identidad:</label>
                    <input value={newParent.idDoc} onChange={handleChange} type="text" name='idDoc'/>

                    <label htmlFor="name">Nombre:</label>
                    <input value={newParent.name} onChange={handleChange} type="text" name='name'/>

                    <label htmlFor="lastName">Apellido:</label>
                    <input value={newParent.lastName} onChange={handleChange} type="text" name='lastName'/>

                    <label htmlFor="educationLevel">Nivel educacional:</label>
                    <input value={newParent.educationLevel} onChange={handleChange} type="text" name='educationLevel'/>

                    <label htmlFor="profession">Profesión:</label>
                    <input value={newParent.profession} onChange={handleChange} type="text" name='profession'/>

                    <label htmlFor="address">Dirección del Hogar:</label>
                    <input value={newParent.address} onChange={handleChange} type="text" name='address'/>

                    <label htmlFor="jobAddress">Dirección del Trabajo: </label>
                    <input value={newParent.jobAddress} onChange={handleChange} type="text" name='jobAddress'/>

                    <label htmlFor="telephone">Télefono del hogar:</label>
                    <input value={newParent.telephone} onChange={handleChange} type="text" name='telephone'/>

                    <label htmlFor="jobTelephone">Télefono del trabajo:</label>
                    <input value={newParent.jobTelephone} onChange={handleChange} type="text" name='jobTelephone'/>

                    <label htmlFor="contactCellphone">Celular:</label>
                    <input value={newParent.contactCellphone} onChange={handleChange} type="text" name='contactCellphone'/>

                    <label htmlFor="email">Email:</label>
                    <input value={newParent.email} onChange={handleChange} type="email" name='email'/>
                </div>
                <button type='submit' className={style.submit_button}>Enviar</button>
            </form>
        </div>
    </>);
}
 
export default FormParent;