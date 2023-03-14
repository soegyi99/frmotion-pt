import Toppings from "../components/Toppings";
import { useContext } from "react";
import PizzaContext from "../components/context/context";

  function Toppingspage () {

const {addTopping,pizza}  = useContext(PizzaContext)

    return(
        <Toppings addTopping={addTopping} pizza={pizza} />
    )
  }

  export default Toppingspage