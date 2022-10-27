import React, { useState } from 'react';

export default function TextForm(props) {

const [text, setText] = useState("");


function handleOnChange(event){
   setText(event.target.value);
}
function handleUpClick(){
   let newText = text.toUpperCase();
   setText(newText);  
   props.showAlert("converted to uppercase", "success")
}
function handleLoClick(){
   let newLoText = text.toLowerCase();
   setText(newLoText);  
   props.showAlert("converted to lowercase", "success")
}
function handleClClick(){
   setText("");  
   props.showAlert("**Cleared**", "success")
}


  return (
    <>
    <div className='container' style={{color : props.mode ===  'dark' ? 'white' : '#121212'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} style={{backgroundColor : props.mode ===  'dark' ? '#121212' : 'white' , color : props.mode ===  'dark' ? 'white' : '#121212'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-dark" onClick={handleLoClick}>CONVERT TO lowercase</button>
      <button className="btn btn-dark mx-2" onClick={handleUpClick}>convert to UPPERCASE</button>
      <button className="btn btn-dark" onClick={handleClClick}>Clear</button>
    </div>

    <div className="container my-3" style={{color : props.mode ===  'dark' ? 'white' : '#121212'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words & {text.length} characters</p>
      <p>it takes "{0.008 * text.split(" ").length}" minutes to read</p>

      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
