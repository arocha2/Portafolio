import { HomeHero } from "./HomeHero";
import { About } from "../About.jsx/About";
import { Portafolio } from "../Portafolio/Portafolio";

export const HomePage = () => {
  return (
    <>
      <HomeHero />
      <About />
      <Portafolio />
    </>
  );
};
