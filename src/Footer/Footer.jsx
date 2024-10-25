import React from "react";

export const Footer = () => {
  return (
    <section className="bg-zinc-800 w-full py-5 px-10 ">
      <div className="text-sm max-w-5xl m-auto text-gray-300 font-bold fontcode flex justify-between ">
        <div>
          <span className="text-cyan-300">{`{/*-*/} `}</span> Desarrollado por{" "}
          <span className="text-cyan-300">Savvy Desarrollo Web</span>{" "}
        </div>
        <div>2022 - 2024</div>
      </div>
    </section>
  );
};
