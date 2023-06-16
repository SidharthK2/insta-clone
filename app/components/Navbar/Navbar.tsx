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
    <nav className="max-w-5xl min-w-64 outline outline-1 flex-col justify-center mx-auto">
      <div className=" mx-auto px-6 sm:px-4">
        <div className="flex flex-wrap items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} width={108} height={29} alt="logo" />
          </div>

          {/* Search Field (Large Screens) */}
          <div className="hidden sm:flex justify-center">
            <div className="flex items-center justify-center max-w-xs border px-2 border-slate-300 rounded-md">
              <Image src={Search} width={24} height={24} alt="search" />
              <input
                className=" py-1 w-1/2 block"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Icons */}
          {/* Search Icon (Small Screens) */}
          <div className="flex justify-between items-center gap-2">
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

            {/* Add more icons here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
