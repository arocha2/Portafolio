import { ProyectoDetail } from "./ProyectoDetail";
const proyects = [
  {
    id: 2,
    title: " Prosigma USA LLC",
    description:
      "Landing diseñada para descubrir todo lo que una marca tiene para ofrecer. esta página web permite a los usuarios enviar consultas, comentarios o solicitudes de información de manera sencilla y directa, además trabajamos con la api de Google maps para la ubicación y posicionamiento del servicio, creación de correos corporativos y más. ",
    link: "https://prosigmausa.com/",
    type: "LandingPage",
    year: "2024",
  },
  {
    id: 1,
    title: "American Branding LLC.",
    description:
      "Este web fue diseñada para captar la atención de los visitantes y convertirlos en clientes potenciales. Ofrece a sus visitantes una experiencia completa y profesional al combinar la funcionalidad de multiidiomas y un formulario de contacto eficaz, adicional creamos correos profesionales con un dominio personalizado.",
    link: "https://www.amebranding.com",
    type: "LandingPage",
    year: "2023",
  },
];
const proyectsDev = [
  {
    id: 10,
    title: "Inversiones Arokim C.A",
    description:
      "Esta web tiene un diseño limpio, atractivo y moderno con información de los servicios principales para convertir en clientes a la mayoría de personas que visiten la web. tiene un sistema de contacto centralizado y correos corporativos.",
    link: "https://arokimproject.netlify.app",
    type: "Simple Page Aplication",
    year: "2024",
  },
  {
    id: 11,
    title: "Style Festejos S.A",
    description:
      "Esta SPA además de tener un diseño personalizado y único tiene un sistema de reservas donde cada usuario podrá obtener información y podrá reservar con detalle su servicio. además se le agrego un sistema de búsqueda.",
    link: "https://styleproject.netlify.app",
    type: "Simple Page Aplication",
    year: "2024",
  },
  {
    id: 12,
    title: "Casa Valencia Hospedajes",
    description:
      "En esta web se implementó un sistema de reservas y un sistema de cotizaciones automáticos donde los clientes podrán de forma fácil y sencilla reservar y cotizar de forma inmediata su estadía en el hotel. clave de acceso: 2526",
    link: "https://casavalenciaproject.firebaseapp.com",
    type: "Simple Page Aplication",
    year: "2024",
  },
];

export const ProjectList = () => {
  return (
    <section className=" w-full flex flex-col gap-4 pb-20">
      <div className=" w-full flex flex-col gap-4">
        <h2 className="pt-10 md:pt-20 md:pb-10  fontcode text-4xl md:text-5xl text-gray-300 font-bold ">
          Proyectos
          <span className="text-cyan-300"> Realizados </span>
        </h2>
        {proyects.map((project) => (
          <ProyectoDetail key={project.id} {...project} />
        ))}
      </div>
      <div id="desarrollo" className=" w-full flex flex-col gap-4">
        <h2 className="pt-10 md:pt-20 md:pb-10  fontcode text-4xl md:text-5xl text-gray-300 font-bold ">
          Proyectos
          <span className="text-green-300"> en desarrollo </span>
        </h2>
        {proyectsDev.map((project) => (
          <ProyectoDetail key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
