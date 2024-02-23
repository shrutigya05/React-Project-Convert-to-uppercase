import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("uppercase was clicked")
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleOnchange=(event)=>{
    console.log("On change")
    
    setText(event.target.value)

  }
  const[text,setText]=useState('Enter Text Here');

  return (
    <>
    <div>
    <h1>{props.heading}</h1>
    <div className='mb-3  '>
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows='8'></textarea> 
    </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className="container my-3">
    <p>{text.split(" ").length} words and {text.length} letter</p>
    <p>Time taken to read {0.008*text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
  </>
  )
}
