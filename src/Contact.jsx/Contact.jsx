import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { useCopy } from "../Hooks/useCopy";
import { FaRegCopy } from "react-icons/fa6";
import { LuCheckCheck } from "react-icons/lu";

export const Contact = () => {
  const { copyClipboard } = useCopy();
  const [email, setEmailCopy] = useState(false);
  const [phone, setPhoneCopy] = useState(false);

  const onCopyEffect = async (value, type) => {
    try {
      await copyClipboard(value);

      type === "email" ? setEmailCopy(true) : setPhoneCopy(true);

      setTimeout(() => {
        setEmailCopy(false);
        setPhoneCopy(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gradient-to-t from-cyan-950 to-transparent text-gray-300 font-bold w-full flex flex-col gap-10 justify-center items-center py-20 px-6">
      <h2 className="text-center text-2xl md:text-4xl">
        Información de interés por si quieres saber mas
      </h2>
      <div className="flex gap-4 flex-wrap">
        <div
          onClick={() => onCopyEffect("abda08.ab@gmail.com", "email")}
          className="relative flex gap-2 justify-center items-center hover:cursor-pointer hover:bg-gray-300  px-8 md:px-10 py-4 rounded-xl text-xl bg-cyan-300 text-center text-zinc-800 w-fit "
        >
          <span className="hidden md:flex">Email</span>
          <span>
            <SiGmail />
          </span>
          <span className="text-sm absolute top-2 right-2">
            {email ? <LuCheckCheck /> : <FaRegCopy />}
          </span>
        </div>
        {/* <a
          href="https://www.linkedin.com/in/abdel-arocha-732507b2/"
          target="_blank"
          className="flex gap-2 justify-center items-center hover:cursor-pointer hover:bg-cyan-300 hover:text-zinc-800  px-8 md:px-10 py-4 rounded-xl text-xl text-center border-2 w-fit border-gray-300"
        >
          <span className="hidden md:flex">Linkeding</span>
          <span>
            <FaLinkedinIn />
          </span>
        </a> */}
        <div
          onClick={() => onCopyEffect("04242812010", "phone")}
          className="relative flex gap-2 justify-center items-center hover:cursor-pointer hover:bg-cyan-300 hover:text-zinc-800 px-8 md:px-10 py-4 rounded-xl text-xl text-center border-2 w-fit border-gray-300"
        >
          <span className="hidden md:flex">Whatsapp</span>
          <span>
            <IoLogoWhatsapp />
          </span>
          <span className="text-sm absolute top-2 right-2">
            {phone ? <LuCheckCheck /> : <FaRegCopy />}
          </span>
        </div>
      </div>
    </section>
  );
};
