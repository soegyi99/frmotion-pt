import { createContext,useState } from "react";

    const PizzaContext = createContext()
        
    function Provider (props) {
        const [pizza, setPizza] = useState({ base: "", toppings: [] });
        const addBase = (base) => {
            setPizza({ ...pizza, base })
          }

        const addTopping = (topping) => {
    

            let newToppings;
            if(!pizza.toppings.includes(topping)){
            newToppings = [...pizza.toppings, topping];
            } else {
            newToppings = pizza.toppings.filter(item => item !== topping);
            }
            setPizza({ ...pizza, toppings: newToppings });
        }

    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

        const value = {
            toppings,
            addTopping,
            pizza,
            bases,
            addBase

        }

        return <PizzaContext.Provider value={value} >
                {props.children}
                </PizzaContext.Provider>

    }
       
    
    export { Provider }
    export default PizzaContext
    