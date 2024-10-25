import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiSendPlane2Line } from "react-icons/ri";

export const ProyectoDetail = ({ title, description, link, type, year }) => {
  const [acordionOpen, setAcordionOpen] = useState(false);
  return (
    <section className=" p-4 md:p-10 bg-zinc-800  rounded-2xl text-gray-300 transition-all ease-in-out duration-300 ">
      <button
        onClick={() => {
          setAcordionOpen(!acordionOpen);
        }}
        className="flex justify-between w-full "
      >
        <div>
          <div className="text-xs flex gap-2">
            <span className="px-4 py-2 text-cyan-300 border-2 border-cyan-300 rounded-full">
              {year}
            </span>
            <span
              className={`${
                type === "Simple Page Aplication"
                  ? "text-green-300 border-green-300"
                  : " text-cyan-300 border-cyan-300"
              } px-4 py-2 border-2  rounded-full`}
            >
              {type}
            </span>
          </div>
          <h3 className="py-2 fontcode text-xl md:text-3xl text-gray-300 font-bold ">
            {title}
          </h3>
        </div>
        <span
          className={`${
            acordionOpen ? "rotate-180" : ""
          } h-fit text-xl transition-all ease-in-out duration-300`}
        >
          <IoIosArrowDown />
        </span>
      </button>
      <div
        className={`${
          acordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        } grid overflow-hidden transition-all ease-in-out duration-200 `}
      >
        <div className="overflow-hidden flex flex-col gap-2">
          <div className=" flex flex-col gap-2 p-8 bg-cyan-800 text-gray-300 font-bold rounded-2xl">
            <span className="text-cyan-300 text-xl">{`{/*`}</span>
            <span className="ml-4">{description}</span>
            <span className="text-cyan-300 text-xl">{`*/}`}</span>
          </div>
          <a
            href={link}
            target="_blank"
            className="font-bold flex gap-2 justify-center items-center hover:cursor-pointer hover:bg-cyan-300  px-8 md:px-10 py-4 rounded-xl text-xl bg-gray-300 text-center text-zinc-800 w-fit  "
          >
            Ver web
            <span className="md:pt-1 font-bold">
              <RiSendPlane2Line />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
