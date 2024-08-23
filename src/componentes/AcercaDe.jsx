import imagenSM from "../assets/fotoSobremi.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";


const AcercaDe = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Acerca de <span className="text-neutral-500"> mí </span></h2>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{ opacity: 1 , x:0}}
                initial={{ opacity: 0 , x: -100}}
                transition={{duration:0.5}}
                
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        {/*Imagen sobre mí */}
                        <img  className="w-40 h-auto object-cover rounded-2xl" src={imagenSM} alt="imagenSobreMi"/>
                    </div>
                </motion.div>
                <motion.div 
                 whileInView={{ opacity: 1 , x:0}}
                 initial={{ opacity: 0 , x:  100}}
                 transition={{duration:0.5}}
                
                className="w-full lg:w-1/2 ">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-6">
                                {ABOUT_TEXT}
                            </p>
                        </div>
                        </motion.div>
                    </div>
                    </div>
    )
}

export default AcercaDe;