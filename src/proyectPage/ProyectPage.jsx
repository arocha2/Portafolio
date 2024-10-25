import { ProjectList } from "./ProjectList";

export const ProyectPage = () => {
  return (
    <section className=" bg-[url('https://retosdeprogramacion.com/mosaic.png')] t-20 w-full h-auto bg-cyan-950 ">
      <div className="w-full bg-gradient-to-t from-cyan-950 to-transparent">
        <div className="max-w-5xl m-auto p-2 md:p-4">
          <ProjectList />
        </div>
      </div>
    </section>
  );
};
