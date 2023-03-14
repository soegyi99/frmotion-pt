
import Link from 'next/link';
import Header from '../components/Header';
import { motion } from 'framer-motion';

function Home() {
 
  const buttonVariant = {
    hover: {
      scale: 1.1,
      transition :{
        yoyo : Infinity
      }
    },
   

  }
 

  return (
    <>

       <div>
        <Header />

        <motion.div
        initial={{opacity:0.2}}
        animate={{opacity:1}}
        transition={{duration:1.7}}
         className="home container">
         <h2>
            Welcome to Pizza Joint
          </h2>     
          <Link href="/base">
                <motion.button
                variants={buttonVariant}
                animate='visible'
                whileHover='hover'
                >
                  Create Your Pizza
                </motion.button>
          </Link>
        </motion.div>
       </div>
         
     
    </>
  );
}

export default Home;
