import React from 'react'
import './Coins.css'

const Coinitem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coins.image} alt=''/>
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>$ {props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
        
    </div>
  )
}

export default Coinitem

//  En React, "props" es una abreviatura de "propiedades" (en inglés, "properties"). 
// Las props son una forma de pasar datos de un componente padre a un componente hijo en React.

//  En un componente React, las props son pasadas como un objeto a través de los parámetros de la función del componente. Por ejemplo:

//  javascript

//  function Greeting(props) {
//    return <h1>Hello, {props.name}!</h1>;
//  }
//  En este ejemplo, la función Greeting toma un objeto llamado props como su único parámetro. Dentro del cuerpo de la función, 
// se utiliza la sintaxis de llaves para acceder a una propiedad específica de las props (en este caso, la propiedad "name") y mostrarla en un elemento de encabezado HTML.

//  Cuando se utiliza el componente Greeting en otro lugar de la aplicación, las props se pueden pasar como atributos en una etiqueta JSX:

//  javascript

//  <Greeting name="Alice" />
//  En este ejemplo, el componente Greeting se llama y se le pasan las props como un atributo "name". 
// Dentro del componente, el valor de la propiedad "name" se accederá a través de la variable "props.name", que será igual a "Alice".

//  Las props son una forma importante de hacer que los componentes de React sean reutilizables y configurables. 
// Al pasar diferentes valores de props a un componente, se puede hacer que se comporte de diferentes maneras según el contexto en el que se está utilizando.