function Contedoress(props) {
    return (
    
          <div className="escritores-contenedor">
            
            
            
            <div className="informacion">
              <p className="nombre">{props.nombre}</p>
              <p className="genero">{props.genero}</p>
              <p className="pais">{props.pais}</p>
              <p className="biografia">{props.biografia}</p>
              <div className="imagen">
              <img className="imagenes" src={require(`./imagenes/${props.imagen}.jpg`)} alt="imagen del escritor" />
            </div>
            </div>
         
        </div>
    );
  }
  
  export default Contedoress;