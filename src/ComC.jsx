// import React from "react";
import {useGlobalContext} from './Context'
const ComC = () =>{
  const firstName = useGlobalContext();

  return(
    <>
      <h1>Hello, My name is {firstName} </h1>
    </>
  )
};

export default ComC;