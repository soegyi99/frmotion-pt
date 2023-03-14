import Base from "../components/base/base";
import {  useContext } from 'react';
import PizzaContext from "../components/context/context";

function Basepage () {
   
const { addBase,pizza} = useContext(PizzaContext)

  
  
    return(
        <Base  addBase={addBase} pizza={pizza} />
    )
}

export default  Basepage