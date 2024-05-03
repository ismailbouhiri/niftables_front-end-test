import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";

export const NavBar = () => {
  return (
    <nav className="text-white font-bold text-lg">
      <div className="flex justify-between items-center	">
        <Image
          src={logo}
          alt="Niftable Logo"
          style={{ maxWidth: "100px", height: "100%" }}
        />

        <div className="flex gap-5 items-center">
          <ul className="flex gap-5 items-center">
            <li>Creon Pass</li>
            <li>
              <span>Token</span>
              <span className="text-xxs"> soon</span>
            </li>
            <li>
              <span>AI Revenue</span>
              <span>soon</span>
            </li>
            <li>
              <span>Ai Launchepad</span>
              <span>soon</span>
            </li>
          </ul>
          <button className="border-white rounded-md border-2 py-2 px-8">Connect</button>
        </div>
      </div>
    </nav>
  );
};
