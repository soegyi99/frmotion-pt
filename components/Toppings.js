import Link from "next/link";
import { useContext } from "react";
import PizzaContext from "./context/context";
import { motion } from 'framer-motion';


const Toppings = ({ addTopping, pizza }) => {

  const { toppings } = useContext(PizzaContext)





  return (
    <motion.div
    initial={{y:-1000}}
    animate={{y:0}}
    transition={{duration:0.7}}
    className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
            whileHover={{
              scale:1.3,color:'yellow',originX:0
            }}
            transition={{type:'tween'}}
             key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>


      <motion.div 
        initial={{x:'-100vw'}}
        animate={{x:0}}
       transition={{duration:3,type:'spring',stiffness:90}}>
      <Link href="/order">
        <button>
          Order
        </button>
      </Link>
      </motion.div>

    </motion.div>
  )
}

export default Toppings;