import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    //State del Formulario

    const [error, guardarError] = useState(false);

    //Extraer Moneda y Fecha
    const {moneda} = busqueda || {};
    

    //Funcion quer coloca los elementos en el State
    const handleChange = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Funcion quer coloca los elementos en el State
    const handleSubmit = e =>{
        e.preventDefault();
        //Validar Campos
        if(moneda.trim() === '' ){
            guardarError(true);
            
        }else{
            guardarError(false);
        }

        
        //Pasarlos al componente Principal
        guardarConsultar(true)
 
    }


    return (
        <form
            onSubmit={handleSubmit}
        >
             {error ? <Error mensaje="El campo es obligatorio"/> : null}

            <div className="input-field col s12">
                <select
                    name="moneda"
                    id="moneda"
                    value={moneda}
                    onChange={handleChange}
                >
                    <option value="">----Seleccione un valor a consultar----</option>
                    <option value="cobre">Cobre</option>
                    <option value="dolar">Dolar</option>
                    <option value="euro">Euro</option>
                    <option value="ipc">IPC</option>
                    <option value="ivp">IVP</option>
                    <option value="oro">Oro</option>
                    <option value="plata">Plata</option>
                    <option value="uf">UF</option>
                    <option value="utm">UTM</option>
                    <option value="yen">YEN</option>
                </select>
               <label htmlFor="moneda">Activo: </label> 
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar valor de activo"
                    className=" btn-large btn-block blue accent-4 "
                    
                />
            </div>
        </form>
    );
};

Formulario.prototype = {  
    busqueda: PropTypes.object.isRequired,  
    guardarBusqueda:PropTypes.func.isRequire,    
    guardarConsultar:PropTypes.func.isRequired    
}

export default Formulario;