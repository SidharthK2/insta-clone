import React from "react";
import Image from "next/image";
import Logo from "./assets/Logo.png";
import Link from "next/link";
import Search from "./assets/search.png";
import Home from "./assets/Home.png";
import Messgenger from "./assets/Messenger.png";
import Activity from "./assets/ActivityFeed.png";
import Find from "./assets/FindPeople.png";
import Post from "./assets/NewPosts.png";
import Profile from "./assets/Profile-Pic.png";

const Navbar = () => {
  return (
    <nav className="flex-grow-0 max-w-4xl min-w-64 flex-col justify-center mx-auto">
      <div className=" mx-auto px-6 sm:px-4">
        <div className="flex-col sm:flex sm:flex-row  items-center justify-between py-2 h-16">
          <div className="flex-shrink-0]">
            <Image src={Logo} width={108} height={29} alt="logo" />
          </div>

          <div className="hidden sm:flex justify-center p-2">
            <div className="flex justify-center max-w-xs border border-slate-300 rounded-md">
              <Image src={Search} width={24} height={24} alt="search" />
              <input
                className=" py-1 w-1/2 block"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className=" sm:hidden">
              <button className="flex justify-center items-center">
                <Image
                  className="b"
                  src={Search}
                  width={30}
                  height={30}
                  alt="search"
                />
              </button>
            </div>
            <button className="mr-3">
              <Image src={Home} width={18} height={18} alt="search" />
            </button>
            <button className="mr-3">
              <Image src={Messgenger} width={18} height={18} alt="search" />
            </button>
            <button className="mr-3">
              <Image src={Post} width={18} height={18} alt="search" />
            </button>
            <button className="mr-3">
              <Image src={Find} width={18} height={18} alt="search" />
            </button>
            <button className="mr-3">
              <Image src={Activity} width={18} height={18} alt="search" />
            </button>
            <button className="mr-3">
              <Image src={Profile} width={18} height={18} alt="search" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
