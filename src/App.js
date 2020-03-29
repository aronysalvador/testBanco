import React, {Fragment , useState , useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Activos from './components/Activos';
import Error from './components/Error';


function App() {

  const [busqueda, guardarBusqueda] = useState({
    moneda:''
  });

  //Extraer datos
  const {moneda} = busqueda;

  //COnsultar
  const [consultar,guardarConsultar] = useState(false);

  //Resultado
  const [resultado, guardarResultado] = useState({});

  //Errores
  const [error,guardarError] = useState(false);

 

  useEffect(() =>{
    const consultarApi = async() =>{
      
      if(consultar){

        const url = `https://www.indecon.online/values/${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();        
        guardarResultado(resultado);
        guardarConsultar(false);


        //Detecta si hubo algun Error
        if(respuesta.status !== 200 ){
          guardarError(true);
          
        }else {
          guardarError(false);
        }           
      }
      
    }

    consultarApi();
// eslint-disable-next-line
  },[consultar]);

  let componente;
  if(error){
    componente = <Error mensaje="NO hay resultados en la busqueda seleccionada"/>
  }else{

    componente = <Activos
                  resultado={resultado}
                  />
  }
  
  return (
    <Fragment> 
      <Header
        titulo="TestBanco React App" 
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <Header
                titulo="Valor Individual de Activo(Fecha Actual)"
              />
            <div className="col m6 s12">        
              <Formulario
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>

        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
