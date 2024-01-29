import { useState, useEffect } from 'react'
import './App.css'
import AmiiboBox from './AmiiboBox';
import AmiiboModal from './AmiiboModal';

function App() {
  const [amiiboData, setAmiiboData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [focusedAmiibo, setFocusedAmiibo] = useState({});

  const getAllAmiibo = async () => {
    try{
      const response = await fetch("https://amiiboapi.com/api/amiibo/?type=figure");

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

  function openModal(){
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  function handleClick(data){
    let amiibo = data.amiibo;
    setFocusedAmiibo(amiibo);
    openModal();
  }

  return (
    <div className="main">
      <h1>Amiibo !</h1>
      <div className="amiiboContainer">
        {amiiboData.map((amiibo, index) => {
          return (
            <AmiiboBox key={index} url={amiibo.image} name={amiibo.name} game={amiibo.amiiboSeries} onClick={() => handleClick ({amiibo})} />
          )
        })}
        <AmiiboModal isOpen={isModalOpen} closeModal={closeModal} amiibo={focusedAmiibo}/>
      </div>
    </div>
  )
}

export default App
