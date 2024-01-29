import { useState, useEffect } from 'react'
import './App.css'
import Modal from 'react-modal';
import AmiiboBox from './AmiiboBox';

function App() {
  const [amiiboData, setAmiiboData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getAllAmiibo = async () => {
    try{
      const response = await fetch("https://amiiboapi.com/api/amiibo/?type=figure");
  
      console.log(response);

      if(!response.ok){
        throw new Error(`${response.error}`);
      }
      else{
        const data = await response.json();
        setAmiiboData(data.amiibo);
      }
      setErrorMsg("");
    }catch(error){
      setErrorMsg(error.message);
    }
  }

  useEffect(()=>{
    getAllAmiibo();
  }, []);

  return (
    <div className="main">
      <h1>Amiibo !</h1>
      <div className="amiiboContainer">
        {amiiboData.map((amiibo, index) => {
          return (
            <AmiiboBox url={amiibo.image} name={amiibo.name} game={amiibo.amiiboSeries}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
