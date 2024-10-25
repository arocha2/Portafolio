import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="bg-cyan-950 w-full py-10 pb-32  ">
      <div className=" bg-zinc-800 w-full -rotate-6 -skew-x-6 py-40  ">
        <div className="max-w-5xl m-auto px-4 md:px-0 rotate-6 skew-x-6">
          <h2 className="text-center md:text-left mb-6 fontcode text-2xl md:text-5xl text-gray-300 font-bold ">
            <span className="text-cyan-300">Landing</span> o{" "}
            <span className="text-green-400">App.</span> Tú solo te preocupas
            por los detalles
          </h2>
          <div className="w-full flex flex-wrap gap-6 md:gap-0">
            <p className="w-full md:w-1/2 px-4 text-gray-300 font-semibold text-lg">
              Somos un grupo de desarrolladores freelance, nos encanta la
              libertad y la flexibilidad que nos otorga nuestra forma de
              trabajar y así llevar nuestro trabajo a todo el mundo.
            </p>
            <p className="w-full md:w-1/2 px-4 text-gray-300 font-semibold text-lg">
              Tenemos una profunda cercanía unos con otros. Creemos en el
              potencial ilimitado de todas las personas y nos gusta impactar
              positivamente en nuestras comunidades.
            </p>
          </div>
          <Link
            to="/faqs"
            className="mt-6 font-bold text-gray-300 flex gap-2 justify-center items-center hover:cursor-pointer hover:bg-cyan-300 hover:text-zinc-800  px-8 md:px-10 py-2 rounded-xl text-xl  border-2 w-fit border-gray-300"
          >
            <span className="hidden md:flex">Preguntas Frecuentes</span>
            <span className="text-5xl md:pt-2 ">
              <IoIosArrowRoundForward />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
