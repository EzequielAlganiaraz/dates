import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    const { v4: uuidv4 } = require('uuid');
    //crear state del formulario
    const [cita, actualizarCita] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    });

    const [error, actualizarError] = useState(false)

    const actualizarState = (e) =>{
        console.log(e.target.value)
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const {mascota, propietario,fecha, hora,sintomas} = cita;


    const submitCita = e =>{
        e.preventDefault();
        //validar nombres
        if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === ""){
            actualizarError(true);
            return;
        }
        
        actualizarError(false);

        //asignar id
        cita.id = uuidv4();
        
        //crear cita
        crearCita(cita);

        //reiniciar form
        actualizarCita({
            mascota:"",
            propietario:"",
            fecha:"",
            hora:"",
            sintomas:""
        })
    }

    return ( 
        <Fragment>
            <h2>Agregar citas</h2>
            {error ? <p className="alerta-error">Debe completar los campos</p> : null}
            <form 
                onSubmit={submitCita}>
                <label>Nombre mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"  
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño"  
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState} 
                    value={fecha} 
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}  
                    value={hora}
                />
                 <label>Sintoma</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas" 
                    onChange={actualizarState}
                    value={sintomas} 
                >

                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar</button>
            </form>
        </Fragment>
     );
}
 

Formulario.propTypes = {
    crearCita : PropTypes.func.isRequired
}
export default Formulario;