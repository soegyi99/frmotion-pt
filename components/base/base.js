import React, { useContext } from 'react';
import Link from 'next/link';
import PizzaContext from '../context/context';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {

const {bases} = useContext(PizzaContext)

const buttonVariant = {
  hover: {
    scale: 1.1,
    transition :{
      yoyo : Infinity
    }
  },
}

  return (
    <motion.div
      initial={{y:-1000}}
      animate={{y:0}}
      transition={{duration:0.7}}
    className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
            whileHover={{
              scale:1.3,color:'yellow',originX:0
            }}
            transition={{type:'tween'}}
            key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div 
        initial={{x:'-100vw'}}
        animate={{x:0}}
       transition={{duration:3,type:'spring',stiffness:90}}
        className="next">
          <Link href="/toppings">
            <motion.button variants={buttonVariant} whileHover='hover' >
              Next
              </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;