import React, { createContext } from "react";
import ComA from "./ComA"
import Data from "./Data"

const FirstName = createContext();

const App = () =>{
  return(
    <>
    <FirstName.Provider 
      value={Data[0].firstName}
    >
      <ComA/>
    </FirstName.Provider>
    
    </>
  )
};

export default App;
export {FirstName};