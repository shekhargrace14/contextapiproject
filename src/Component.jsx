import {useGlobalContext} from "./Context"


const Component = () =>{
 
const firstName = useGlobalContext();
  return(
    <>
      <h1>My name is {firstName}</h1>
    </>
  )
};

export default Component;