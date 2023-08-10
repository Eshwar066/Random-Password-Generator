import { useState } from "react";
import "./App.css";
import UsePasswordGenerator from "./hooks/UsePasswordGenerator";

function App() {

  const[length,setLength]=useState(4);
  const[checkboxData,setCheckboxData]=useState([
    {title:"Include UpperCase Letters", state:false},
    {title:"Include LowerCase Letters", state:false},
    {title:"Include Numbers", state:false},
    {title:"Include Symbols", state:false}
   ]);

   const {password,errorMessage,generatePassword} = UsePasswordGenerator("");

   const handleCheckBox=(i)=>{
     const updatedCheckBox=[...checkboxData]
     updatedCheckBox[i].state=!updatedCheckBox[i].state
     setCheckboxData(updatedCheckBox)
   }

   const handleCopy=()=>{
     navigator.clipboard.writeText(password);
   }
  
  

  return (
    <div className="container"> Random Password Generator
     {/* Password text and copy  */}
    <div className="header">
      <div classname="title">{password}{errorMessage}</div>
      <button className="copyBtn" onClick={handleCopy} >Copy</button>
    </div>
    <div className="charLength">
      <span>
        <label>character Length: </label>
        <label>{length}</label>
      </span>
      <input type="range"
      min='4'
      max='20'
      // value={}
      onChange={(e)=>setLength(e.target.value)}
      
      />
    </div>
    {/* checkboxes */}
    <div className="checkboxes">
    {checkboxData.map((checkbox,i)=>{
    return (
           <div key={i}>
             <input type="checkbox" onChange={()=>handleCheckBox(i)} checked={checkbox.state}/>
            <span>{checkbox.title} </span>
           </div>
           );
    })}
    </div>
    {/* Generate button  */}
    <button className="generateBtn" onClick={()=>{generatePassword(checkboxData,length)}}>Generate Password</button>
    </div>
  );
}

export default App;
