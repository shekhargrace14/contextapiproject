import React, { createContext } from "react";
import ComA from "./ComA"
import Data from "./Data"

const FirstName = createContext();

const App = () =>{
  return(
    <>
      <h1>This is amazing grace i love Gauri </h1>
    </>
  )
};

export default App;
export {FirstName};