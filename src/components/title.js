/** import nos permite traer modulos externos a nuestro archivo para poder usarlos */
import React from 'react'

/** Cuando le damos export default es porque estamos exportando la clase como tal  */

/** Para que una clase se convierta en una clase que genere un componente  de react,
 * debe de heredar de React.Component
 */

 /** Solo se exporta un elemento por default  */
export default class Title extends React.Component{
    /** La segunda caracteristica es que el component debe implementar el render y que ese elemento
     * render retorne al menos un elemento html y no mas de un elemento html */
    /** <p></p>
     *  <p></p>  retonar eso no se puede, ya que hay mas de un elemento padre
     * 
     * <p>
     *      <h2> </h2>
     *      <h2> </h2>
     * </p>
     * Ese si se puede ya que es un solo elemento padre y puede tener muchos hijos.
     */

     render(){
         return(
             <div>
                <h1>Places</h1>
                <p>Descubre lugares de manera simple</p>
             </div>
         );
     }
}

export function saludar(){
    return "SALUDO DESDE COMPONENTE NO DEFAULT"
}