import React from 'react';
import './App.css';

/** Como estamos importando el elemento por default, podemos darle un nombre al tag que usaremos para invocarlo */
import Title from './components/title';

/** cuando importamos un elemento que no es por default, tenemos que importalo con el nombre de el */

/** Para manejar el state debemos agregar un valor por defecto en el constructor */
class App extends React.Component{

  constructor(props){
    super(props);

    /**  el this.state guarda datos de todo aquello que se pueden actualizar mientras se esta ejecutando el componente */
    this.state = {
      numero: 0
    }
  }

  updateNumero(){
    this.setState({
      numero: this.state.numero + 1
    });
  }

  render (){
    return (
      <section>
      <div>
        <div> 
          <Title></Title>
          <h2> {this.state.numero} </h2>
          { /** onClick es reservado de react */}
          {/** Debemos procurar siempre usar arrow funtions para no corromper el ambito de react de los elementos */}
          <button onClick={()=>{ this.updateNumero() }}>Crear una cuenta gratuita</button>
          <img src={ process.env.PUBLIC_URL + 'images/icono01.png'} alt="icono bici"/>
          <div>
            <ul>
              <li>
                <h3>Calificaciones con emociones</h3>
                <p>Califica tus lugares con experiencias, no con numeros</p>
              </li>
              <li>
                <h3>Sin internet? Sin problemas</h3>
                <p>Places funciona sin internet o en conexiones lentas</p>
              </li>
              <li>
                <h3>Tus lugares favoritos</h3>
                <p>Define tus lista de lugares favoritos</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    ) 
  }
}

export default App;