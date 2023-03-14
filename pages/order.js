import { useContext } from "react";
import PizzaContext from "../components/context/context";
import Order from "../components/Order";

function Orderpage () {

    const { pizza} = useContext(PizzaContext)

    return(
        <Order pizza={pizza} />
    )
}

export default Orderpage