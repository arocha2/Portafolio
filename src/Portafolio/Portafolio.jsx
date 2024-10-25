import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

export const Portafolio = () => {
  return (
    <section className="  bg-cyan-950 w-full px-4 py-5 pb-32">
      <div className=" max-w-5xl m-auto">
        <h2 className="text-center  fontcode text-3xl md:text-5xl text-gray-300 font-bold ">
          Te mostramos nuestros{" "}
          <span className="text-cyan-300">proyectos </span>
        </h2>
      </div>
      <div className="max-w-5xl m-auto flex flex-wrap mt-2">
        <section className="w-full  text-gray-300  p-2 ">
          <Link
            to="/proyectos"
            className="mt-2 md:mt-6 font-bold text-gray-300 flex gap-2 justify-around items-center hover:cursor-pointer bg-zinc-800 hover:bg-cyan-300 hover:text-zinc-800  px-8  py-8 rounded-xl text-2xl md:text-5xl  w-full "
          >
            <span className="">
              Proyectos <br />
              Realizados
            </span>
            <span className="text-5xl md:text-8xl md:pt-2 ">
              <IoIosArrowRoundForward />
            </span>
          </Link>
        </section>
        {/* <section className="w-full md:w-1/2 text-gray-300  p-2 ">
          <Link
            to="/proyectos"
            className="mt-2 md:mt-6 font-bold text-gray-300 flex gap-2 justify-around items-center hover:cursor-pointer bg-zinc-800 hover:bg-cyan-300 hover:text-zinc-800  px-8  py-8 rounded-xl text-2xl md:text-5xl  w-full "
          >
            <span className="">
              Proyectos <br />
              en desarrollo
            </span>
            <span className="text-5xl md:text-8xl md:pt-2 ">
              <IoIosArrowRoundForward />
            </span>
            +
            
          </Link>
        </section> */}
      </div>
    </section>
  );
};
