import React from "react";
import { MdOutgoingMail } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
import { AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-[20px] w-full bg-primary">
      <div className="container flex justify-center items-center flex-col">
        <div className="flex items-center gap-4">
          <a href="" className="text-4xl">
            <MdOutgoingMail />
          </a>{" "}
          <a href="" className="text-4xl">
            <SiTelegram />
          </a>{" "}
          <a href="" className="text-4xl">
            <AiFillTwitterSquare />
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
