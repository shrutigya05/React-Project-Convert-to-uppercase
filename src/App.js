import React from "react";

import "./App.css";

function project(){
  return(
    <div className="header">
      <nav>
      <img src="nike.png" alt="nike"/>
      <ul className="list">
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
      </ul>
      <div className="btn">
      <button type="button">Login</button>
      </div>
      </nav>
     
    </div>
  )
}
export default project;