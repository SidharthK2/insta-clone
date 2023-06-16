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
    <nav className="outline outline-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} width={108} height={29} alt="logo" />
          </div>

          {/* Search Field (Large Screens) */}
          <div className="hidden sm:flex justify-center">
            <div className="flex items-center max-w-xs border px-2 border-slate-300 rounded-md">
              <Image src={Search} width={18} height={18} alt="search" />
              <input
                className=" py-1 w-fit block"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Icons */}
          {/* Search Icon (Small Screens) */}
          <div className="flex justify-between items-center gap-2">
            <div className="sm:hidden">
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
