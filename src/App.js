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
        setCoins(response.data); //asigno a la variable la respuesta que nos proporsiona axios
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
