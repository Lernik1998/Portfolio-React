// Importamos el archivo barraNavegacion.jsx

import AcercaDe from "./componentes/AcercaDe";
import BarraNavegacion from "./componentes/BarraNavegacion";
import Cabecera from "./componentes/Cabecera";
import Contacto from "./componentes/Contacto";
import Experiencia from "./componentes/Experiencia";
import Proyectos from "./componentes/Proyectos";
import Tecnologias from "./componentes/Tecnologias";

const App = () => {
  return (
    // Importamos el archivo barraNavegacion.jsx
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      <div className="container mx-auto px-8">
        <BarraNavegacion />
        <Cabecera />
        <AcercaDe />
        <Tecnologias/>
        <Experiencia/>
        <Proyectos/>
        <Contacto/>
      </div>
    </div>
  )
}

export default App;