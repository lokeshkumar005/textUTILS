import './App.css';
import Navbar from '../src/components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const [alert,  setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert ({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert("")
    }, 1500);
  }
  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
   }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls)

    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")

    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="textUTILS" aboutText="About" mode= {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter text below" mode = {mode}/>
    {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter text below" mode = {mode}/>} />
    </Routes> */}

    </div>
    {/* </BrowserRouter> */}
    </>

    
  );
}

export default App;
