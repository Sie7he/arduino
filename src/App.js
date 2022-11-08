import './App.css';
import React, { useState, useEffect } from 'react';
import { Card } from './components/Card';




function App() {

  const [sensor, setSensor] = useState([]);


  useEffect(() => {
    getAPI();
  }, [sensor])


  const getAPI = async () => {
    const resp = await fetch('https://iot-production.up.railway.app/get.php');
    const data = await resp.json();
    setSensor(data);
    
  }

  return (


    <div className="App">

      <div className="container">
        <div className="div-transform">

        
         {sensor.humedad && <Card className='card card-1' title='Temperatura' content={sensor.temperatura + '°C'} subText={sensor.fecha}/>}
         {sensor.humedad &&<Card className='card card-2' title='Humedad Ambiental' content={sensor.humedad + '%'} subText={sensor.fecha} />}
        {sensor.humedad &&<Card className='card card-3' title='Humedad Tierra'  content={sensor.h_tierra + '%'} subText={sensor.fecha}/>}

        </div>
      </div>
    </div>
  );
}

export default App;
