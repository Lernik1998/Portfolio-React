// Importamos los ICONOS

import { DiMysql } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { DiJava } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";

// Importamos animación 
import { motion } from "framer-motion";


const controlIconos = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }

});

const Tecnologias = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
            whileInView={{ opacity: 1 , x:0}}
            initial={{ opacity: 0 , x: -100}}
            transition={{duration: 1.5}}

            className="my-20 text-center text-4xl">Tecnologías</motion.h2>
            <motion.div 
             whileInView={{ opacity: 1 , x:0}}
             initial={{ opacity: 0 , x: -100}}
             transition={{duration:1.5}}

            className="flex flex-wrap items-center justify-center gap-4">

                <motion.div

                    variants={controlIconos(2.2)}
                    initial="initial"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMysql className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div 
                variants={controlIconos(2.8)}
                initial="initial"
                animate="animate"

                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJava className="text-7xl text-red-400" />
                </motion.div>

                <motion.div 
                variants={controlIconos(3.1)}
                initial="initial"
                animate="animate"
                
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript1 className="text-7xl text-yellow-400" />
                </motion.div>

                <motion.div variants={controlIconos(2.5)}
                    initial="initial"
                    animate="animate"
                    
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiHtml5 className="text-7xl text-orange-400" />
                </motion.div>

                <motion.div variants={controlIconos(3.3)}
                    initial="initial"
                    animate="animate"
                    
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiCss3 className="text-7xl text-blue-400" />
                </motion.div>

                <motion.div variants={controlIconos(2.7)}
                    initial="initial"
                    animate="animate"
                    
                     className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiReact className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div variants={controlIconos(3.0)}
                    initial="initial"
                    animate="animate"
                    
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsGithub className="text-7xl text-white-400" />
                </motion.div>

                </motion.div>
        </div>
    )
}

export default Tecnologias;