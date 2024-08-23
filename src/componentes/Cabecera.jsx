import { HERO_CONTENT } from "../constants"; // Importamos el contenido de la cabecera
import fotoCV from "../assets/fotoCV.png";// Importamos la imagen
import { motion } from "framer-motion"; // Para aplicar ANIMACIONES npm install framer-motion ->  https://www.framer.com/motion/introduction/


// Función para animar todos los textos de la derecha hacia la izquierda

const contenedor = (delay)=>({
    hidden: {x: -100, opacity: 0},
    visible:{
        x:0,
        opacity:1,
        transition: {duration: 0.5,delay: delay }
    }
});

const Cabecera = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        {/*Aquí irá todo el texto del portfolio, en el H1 indico el nombre*/}
                        <motion.h1 variants={contenedor(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Lernik Gasparyan </motion.h1>

                        {/*Se podría haber hecho así directamente pero con la función es mucho mas sencillo y no repetimos código

                        <motion.h1 initial={{x: -100 , opacity: 0}}  animate={{ x: 0,opacity:1 }} transition={{duration:0.5 ,delay:0.7 }} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Lernik Gasparyan </motion.h1>
                        */}

                        <motion.span 

                        variants={contenedor(0.5)} initial="hidden" animate="visible"

                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            {/*<span> es un elemento en línea, esto significa que no interrumpe el flujo del texto o de otros elementos en la misma línea. */}
                            Desarrollador web
                        </motion.span>
                        <motion.p
                        variants={contenedor(1)} initial="hidden" animate="visible"
                         className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        { /*Contiene la imagen del CV */}
                        <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:1.2}}
                         className="w-40 h-auto object-cover rounded-2xl" src={fotoCV} alt="imagenCV" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cabecera;