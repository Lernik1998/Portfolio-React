import project1 from "../assets/projects/fitw.jpg";
import project2 from "../assets/projects/fitB.jpg";
import project3 from "../assets/projects/inventario.jpg";
import project4 from "../assets/projects/portal.jpg";
import project5 from "../assets/projects/tareas.jpg";
import project6 from "../assets/projects/pokeProyecto.jpg";

export const ABOUT_TEXT =
  "Soy una persona persistente, profesional y comprometida, especialmente cuando trabajo en un entorno donde me siento valorado. En esos contextos doy lo mejor de mí, aportando todos mis recursos, conocimientos y experiencia para generar valor real en los proyectos.\n" +
  "\n" +
  "Me esfuerzo por ser eficaz en mis tareas, comunico con claridad y disfruto trabajando en equipo. Siempre busco aportar ideas útiles, mantener un ambiente respetuoso y crecer junto con quienes me rodean.\n" +
  "\n" +
  "Apasionado por la tecnología y el desarrollo web.";

export const HERO_CONTENT =
  "Desarrollador FullStack con un año de experiencia.\n" +
  "\n" +
  "Enfocado principalmente en el desarrollo de aplicaciones web escalables.\n" +
  "\n" +
  "Actualmente ampliando conocimientos en ciberseguridad a través de un programa especializado en UNIR - Universidad Internacional de La Rioja.";

export const EXPERIENCES = [
  {
    year: "2025 - Actualidad",
    role: "Desarrollador FullStack",
    company: "NTT Data",
    description:
      "Principios SOLID y buenas prácticas de desarrollo.\n" +
      "Diseño de interfaces modernas y responsivas.\n" +
      "",
    // technologies: ["Javascript", "React.js"],
  },
  {
    year: "2024 - 2025",
    role: "Desarrollador FullStack",
    company: "Fernando Moll",
    description:
      "Programación backend con PHP, aplicando principios SOLID y buenas prácticas de desarrollo.\n" +
      "Diseño de interfaces modernas y responsivas con Quasar, Tailwind CSS y Bootstrap.\n" +
      "Implementación de un ERP adaptable a diferentes tipos de empresas, con arquitectura modular y escalable.\n" +
      "Desarrollo de un CRM multiplataforma para uso interno y comercial, utilizando Laravel.\n" +
      "",
    // technologies: ["Javascript", "React.js"],
  },

  {
    year: "2021 - 2024",
    role: "Recepcionista ",
    company: "MR Hotels",
    description:
      "Dominio de plataformas de gestión hotelera.\n" +
      "Trabajo en entorno de alta exigencia con orientación a resultados y excelencia operativa.\n" +
      "Uso avanzado de Paquete Office\n" +
      "",
    // technologies: ["Javascript", "React.js"],
  },

  {
    year: "2019 - 2021",
    role: "Recepcionista ",
    company: "Hotel Ona Ogisaka Garden",
    description:
      "Uso de CRM y ERP especializado.\n" +
      "Realización de auditorías internas y control de datos.\n" +
      "Gestión de herramientas digitales específicas del sector, con enfoque comercial y técnico.\n" +
      "",
    // technologies: ["Javascript", "React.js"],
  },

  {
    year: "2018 - 2019",
    role: "Recepcionista ",
    company: "Hotel Daniya, Dénia ",
    description:
      " Manejo de bases de datos de reservas y seguimiento de incidencias.\n" +
      " Desarrollo de habilidades comunicativas y resolución de problemas en tiempo real.\n" +
      "\n" +
      " Organización y análisis de datos para optimizar la ocupación y la rentabilidad.",
    // technologies: ["Javascript", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "FitWorking",
    image: project1,
    description:
      "El proyecto FitWorking es una plataforma digital orientada a la gestión integral de actividades deportivas. " +
      "FitWorking responde a las necesidades actuales del sector deportivo digital, recomendando su evolución continua mediante el análisis del uso y la retroalimentación de los usuarios. ",

    technologies: [
      "Laravel",
      "Inertia",
      "Vue",
      "Tailwind CSS",
      "Axios",
      "Stripe",
      "Lodash",
      "FullCalendar",
      "Google Calendar API",
      "Telegram Bot",
      "MySQL",
    ],
    url: "https://github.com/Lernik1998/FitWorking",
  },

  {
    title: "FitBooking",
    image: project2,
    description:
      "FitBooking es una plataforma orientada a la gestión integral de espacios deportivos y espacios de coworking. ",

    technologies: ["Laravel", "Tailwind CSS", "Blade", "Axios", "MySQL"],
    url: "https://github.com/Lernik1998/FitBooking",
  },

  {
    title: "WebApp de Gestión de Inventario",
    image: project3,
    description:
      "Aplicación web completa para gestionar productos, aplicando el patrón CRUD (Crear, Leer, Actualizar y Eliminar), todo desde una interfaz moderna y responsive.",
    technologies: ["Symfony", "Tailwind CSS", "Twig", "MySQL"],
    url: "https://pagina-web-js-pokemon.vercel.app/",
  },

  {
    title: "Portal de clientes",
    image: project4,
    description:
      "Aplicación para gestión de clientes en empresa privada del sector de impresión.",
    technologies: [
      "Quasar",
      "Vue",
      "JavaScript",
      "LocalStorage",
      "Capacitor",
      "Axios",
      "Tailwind CSS",
    ],
    url: "https://github.com/Lernik1998/Portal-de-clientes-",
  },

  {
    title: "Gestor de tareas",
    image: project5,
    description:
      "Gestor de tareas capaz de almacenar en memoria datos relevantes, sin la necesidad de una base de datos.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage", "Vue3"],
    url: "https://github.com/Lernik1998/todolist",
  },

  {
    title: "Información generaciones Pokemon",
    image: project6,
    description:
      "Web informativa acerca de las generaciones de Pokemon realizada en el primer año de DAW.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://pagina-web-js-pokemon.vercel.app/",
  },
];

export const CONTACT = {
  address: "Alicante, España",
  // phoneNo: "",
  email: "lernik10@gmail.com",
};
