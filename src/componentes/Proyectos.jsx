import { PROJECTS } from "../constants";

// Importamos animación 
import { motion } from "framer-motion";

const Proyectos = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <motion.h2 
            whileInView={{ opacity: 1 , x:0}}
            initial={{ opacity: 0 , x: -100}}
            transition={{duration: 0.5}}

            className="my-20 text-center text-4xl ">
                Proyectos
            </motion.h2>
            <div>
                {PROJECTS.map((proyecto, indice) => (
                    <div key={indice} className="mb-8 flex flew-wrap lg:justify-center ">
                        <motion.div 
                        whileInView={{ opacity: 1 , x:0}}
                        initial={{ opacity: 0 , x: -100}}
                        transition={{duration: 1}}

                        className="w-full lg:w-1/4">
                            <img src={proyecto.image} 
                            width={150} 
                            height={150} 
                            alt={proyecto.title} 
                            className="mb-6 rounded"/>
                        </motion.div>
                        <motion.div 
                        whileInView={{ opacity: 1 , x:0}}
                        initial={{ opacity: 0 , x: 100}}
                        transition={{duration: 1}}
                        
                        className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {proyecto.title}
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                {proyecto.description}
                            </p>
                            {proyecto.technologies.map((tecnologia,indice) =>(
                                <span key={indice} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tecnologia}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Proyectos;