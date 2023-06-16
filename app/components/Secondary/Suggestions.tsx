import React from "react";
import Image from "next/image";
import profilePic from "./assets/dp.png";
import data from "./data.json";

const Suggestions = () => {
  return (
    <div className="suggestions-container flex-col justify-start px-4 py-7 text-sm text-gray-500">
      <div className="flex justify-between text-xs py-1 my-4">
        <div className="flex gap-3 items-center">
          <div>
            <Image src={profilePic} alt="dp" width={48} height={48} />
          </div>
          <div className="flex-col">
            <div className="text-sm font-semibold text-black">
              ShirleyRomero
            </div>
            <div>ShirleyRomero</div>
          </div>
        </div>
        <span className="text-blue-500 text-xs font-medium">Follow</span>
      </div>

      <div className="flex justify-between my-2">
        <span>Suggestions for You</span>
        <span className="text-black text-xs font-medium">See All</span>
      </div>

      {data.resources.map((el, index) => {
        return (
          <div key={index} className="flex justify-between text-xs py-2">
            <div className="flex">
              <div>
                <Image src={el.imgUrl} alt={el.name} width={32} height={32} />
              </div>
              <div className="flex-col">
                <div>{el.name}</div>
                <div>{`Followed by ${el.name} + 2 more`}</div>
              </div>
            </div>
            <span className="text-blue-500 text-xs font-medium">Follow</span>
          </div>
        );
      })}
    </div>
  );
};
export default Suggestions;
