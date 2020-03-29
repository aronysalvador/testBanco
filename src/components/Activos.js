import React from 'react';
import PropTypes from 'prop-types';

const Activos = ({resultado}) => {

    //Extraer los valores
    const {key,name,unit,values} = resultado || {};
    //Extraer ultimo valor
    



    //Prevenir que no se ejecute
    if(!key) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>{name}</h2>
                <p className="temperatura">
                  {values[Object.keys(values)[0]]}
                </p>
                <h2>{unit}</h2> 
            </div>
        </div>
    );
};

Activos.prototype = {
    resultado: PropTypes.object.isRequired    
}

export default Activos;