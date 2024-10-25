import React from "react";
import { Contact } from "../Contact.jsx/Contact";

const preguntas = [
  {
    id: 1,
    preg: "¿Qué servicios ofrecen desarrollo de páginas web y landing pages?",
    resp: "Nosotros ofrecemos servicios de diseño y desarrollo de páginas web 100% personalizadas, con código altamente adaptable a todos los dispositivo y escalable para cualquier actualización  que quiera realizar.",
  },

  {
    id: 2,
    preg: "¿Cuál es el proceso para el desarrollo de una página web o landing page?",
    resp: "El proceso es sencillo, comenzamos con una reunión inicial para entender tus necesidades y objetivos. Luego, nuestro equipo de diseño crea un prototipo que se ajusta a tus requerimientos. Una vez aprobado, procedemos con el desarrollo y la implementación de la página.",
  },
  {
    id: 3,
    preg: "¿Cuánto tiempo tarda el desarrollo de una página web o landing page?",
    resp: "El tiempo de desarrollo varía dependiendo de la complejidad del proyecto, pero generalmente una página web puede estar lista en 4-6 semanas, mientras que una landing page puede completarse en 1-2 semanas.",
  },
  {
    id: 4,
    preg: "¿Ofrecen servicios de mantenimiento y actualización de las páginas web existentes?",
    resp: " Sí, ofrecemos servicios de mantenimiento y actualización para garantizar que tu página web o landing page esté siempre actualizada y funcionando correctamente.",
  },
];

export const Faqs = () => {
  return (
    <div className="bg-cyan-950">
      <div className="max-w-5xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-center  fontcode text-2xl md:text-5xl text-gray-300 font-bold">
          Preguntas Frecuentes
        </h2>
        <div className="mt-6 border-t-2 border-cyan-300 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {preguntas.map((preg) => (
              <dl key={preg.id}>
                <dt className="font-semibold leading-6 text-cyan-300 text-lg mt-2 fontcode">
                  {preg.preg}
                </dt>
                <dd className="mt-4">
                  <p className="leading-6 font-semibold text-gray-300 ">
                    {preg.resp}
                  </p>
                </dd>
              </dl>
            ))}
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};
