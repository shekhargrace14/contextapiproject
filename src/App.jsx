import React, { createContext } from "react";
import ComA from "./ComA"
import Data from "./Data"

const FirstName = createContext();

const App = () =>{
  return(
    <>
    <FirstName.Provider 
      value={Data[0].firstName}
      lastName={Data[0].lastName}
      phone={Data[0].phone}
      email={Data[0].email}
    >
      <ComA/>
    </FirstName.Provider>
    
    </>
  )
};

export default App;
export {FirstName};