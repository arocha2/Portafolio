import { Contact } from "../Contact.jsx/Contact";

export const HomeHero = () => {
  return (
    <section className=" bg-[url('https://retosdeprogramacion.com/mosaic.png')] pt-20 w-full h-fit  bg-cyan-950">
      <div className="max-w-6xl m-auto px-6 md:px-4">
        <p className="text-4xl md:text-7xl font-bold text-gray-300 md:mb-6">{`{ /*`}</p>
        <h1 className="text-gray-300 md:pl-10  fontcode w-full md:w-4/5 text-[2.8em] md:text-7xl font-bold leading-[1em] py-4">
          Desarrollo de
          <span className="text-cyan-300"> Web apps</span> y
          <span className="text-green-400"> LandingPages</span>
        </h1>
        <p className="text-4xl md:text-7xl font-bold text-gray-300 md:mt-6">{`*/ }`}</p>
        <p className="text-xl md:text-3xl font-bold flex justify-end text-gray-300">
          by Abdel Arocha
        </p>
      </div>
      <Contact />
    </section>
  );
};
