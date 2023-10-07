import React from "react";
import {FirstName} from './App'
const ComC = () =>{
  return(
    <>
        <FirstName.Consumer>{(FirstName)=>{
            return (
                <>
                    <h1>Hello, My name is {FirstName} </h1>;
                </>
            )
        }} 
        </FirstName.Consumer>
      
    </>
  )
};

export default ComC;