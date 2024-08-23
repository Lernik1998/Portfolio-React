import { CONTACT } from "../constants";

// Importamos animación 
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
       whileInView={{ opacity: 1 , x:0}}
       initial={{ opacity: 0 , x: -100}}
       transition={{duration: 0.5}}
       
        className="my-10 text-center text-4xl">
      Contacto
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{ opacity: 1 , x:0}}
        initial={{ opacity: 0 , x: -100}}
        transition={{duration: 1}}
        
        className="my-4">
            {CONTACT.address}
        </motion.p>

        <motion.a 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
      >
        {CONTACT.email}
      </motion.a>


      </div>
    </div>
  )
}

export default Contacto;