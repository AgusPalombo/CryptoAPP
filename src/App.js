// USESTATE se utiliza para agregar estado a un componente funcional. 
// El hook toma un valor inicial como argumento y devuelve un par de valores: el estado actual y una función para actualizar ese estado. 
// Cada vez que se llama a la función de actualización, React volverá a renderizar el componente y mostrará el nuevo estado.


// Por otro lado, USEEFFECT se utiliza para manejar efectos secundarios en componentes funcionales. 
// Un efecto secundario puede ser cualquier cosa que no involucre directamente al DOM, como hacer una solicitud a una API o modificar el estado de una aplicación externa. 
// El hook toma una función de efecto y un array de dependencias como argumentos.

// La función de efecto se ejecuta cada vez que el componente se renderiza, pero se puede controlar cuándo se vuelve a ejecutar especificando las dependencias. 
// Si no hay dependencias, la función de efecto se ejecutará cada vez que el componente se renderice. 
// Si se especifican dependencias, la función de efecto se ejecutará solo cuando alguna de las dependencias cambie.



// REACT ROUTER DOM EXPLICACION

// El React Router Dom es una librería de enrutamiento para aplicaciones web construidas con React. 
// En resumen, su función principal es permitir que los desarrolladores definan diferentes rutas o URLs 
// para diferentes partes de su aplicación y mostrar el componente correspondiente cuando se accede a cada una de ellas.

// Con React Router Dom, puedes crear una aplicación de una sola página (SPA) con diferentes vistas que se cargan dinámicamente sin tener que recargar la página. 
// Esto mejora la experiencia del usuario y también hace que la aplicación sea más rápida y eficiente.

// La librería proporciona diferentes componentes para manejar diferentes tipos de rutas, como BrowserRouter para manejar rutas en la parte del lado del cliente, 
// HashRouter para manejar rutas en la URL después de un signo de hash, Route para definir una ruta y Link para crear enlaces entre diferentes rutas.

// Además, React Router Dom también proporciona una serie de características avanzadas, como enrutamiento anidado, enrutamiento con parámetros y redirecciones.

// En resumen, el React Router Dom es una herramienta esencial para construir aplicaciones web complejas con React, 
// ya que permite que los desarrolladores definan rutas y muestren componentes dinámicamente en función de esas rutas, 
// lo que mejora la experiencia del usuario y hace que la aplicación sea más rápida y eficiente.


// COMPONENTES ROUTES Y ROUTE EXPLICACION

// Los componentes Route y Routes son dos de los componentes más importantes de la librería React Router Dom, 
// y se utilizan para configurar y definir el enrutamiento de una aplicación web en React.

// El componente Route es un componente de React que permite definir una ruta para una determinada URL en la aplicación. 
// Cada vez que un usuario accede a esa URL, el componente asociado con esa ruta se renderiza. 
// El componente Route toma varias props para definir una ruta, como path para la URL a la que se asocia la ruta y 
// component para el componente que se renderizará cuando se acceda a esa ruta.

// Por ejemplo, el siguiente código definiría una ruta para la URL /home y renderizaría el componente Home cuando se accede a esa URL:


// import { Route } from 'react-router-dom';
// import Home from './components/Home';

// function App() {
//   return (
//     <div>
//       <Route path="/home" component={Home} />
//     </div>
//   );
// }

// El componente Routes es un componente de nivel superior que se utiliza para definir varias rutas para diferentes URL en la aplicación. 
// Se utiliza para definir la estructura general de enrutamiento de la aplicación. Dentro del componente Routes, se pueden anidar varios componentes Route para definir diferentes rutas.

// Por ejemplo, el siguiente código definiría una estructura de enrutamiento que tiene una ruta para la URL /home que muestra el componente Home, 
// y otra ruta para la URL /about que muestra el componente About:

// javascript
// Copy code
// import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// En resumen, los componentes Route y Routes son esenciales para definir y configurar el enrutamiento de una aplicación web en React utilizando React Router Dom. 
// Con estos componentes, los desarrolladores pueden definir diferentes rutas y componentes que se renderizarán cuando se acceda a esas rutas.





import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import axios, { Axios } from 'axios'
import {Routes,Route} from 'react-router-dom'

import Coins from './components/Coins/Coins';
import Navbar from './components/Navbar/Navbar';
import Coin from './routes/Coin';

function App() {

  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

  useEffect(() =>{
      axios.get(url).then((response) =>{
        setCoins(response.data); //asigno a la variable la respuesta que nos porporsiona axios
        console.log(response.data[0]); // console.log devuelve un array con la data
      }).catch((error)=>{
        console.log(error);
      })
    }, []//previene que la API no haga calls continuas
  );

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
