import { useState } from "react";

const UsePasswordGenerator=()=>{
   const[password,setPassword]=useState("");
   const[errorMessage,setErrorMessage]=useState("");

   const generatePassword=(checkboxData,length)=>{
    let charset="", 
    generatedPassword="";

    const selectedOption = checkboxData.filter((checkbox)=>checkbox.state);

    if(selectedOption.length===0){
        setErrorMessage("Select Atleast one option.");
        setPassword("");
        return;
    }
    selectedOption.forEach((option) => {
        switch(option.title){
            case "Include UpperCase Letters":
                charset +="ABCDEFGHIFKLMNOPQRSTUVWXVYZ";
                break;
            case "Include LowerCase Letters":
                charset+="qwertyuiopasdfghjklzxcvbnm";
                break;   
            case "Include Numbers":
                charset+="1234567890";
                break;
            case "Include Symbols":
                charset+="!@#$%^&*()";
                break;     
            default:
                break;    
        }
    });

    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*charset.length);
        generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
    setErrorMessage("");
   
   }

   return {password,errorMessage,generatePassword};
}

export default UsePasswordGenerator;