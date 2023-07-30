"use client";

import { useState } from "react";
import CustomButton from "../shared/CustomButton";

export const Skills = () => {
  const [menu, setMenu] = useState<number>(1);

  const stacks = [
    {
      title: "FrontEnd",
      menu: 1,
    },
    {
      title: "BackEnd",
      menu: 2,
    },
    {
      title: "Other",
      menu: 3,
    },
  ];

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center">
      <p className=" font-bold text-white text-4xl my-3 lg:text-5xl">My Skills</p>
      <div className="grid grid-cols-3 my-3 w-full">
        {stacks.map((stack) => (
          <div key={stack.menu}>
            <button
              className={menu === stack.menu ? "rounded-sm w-full py-3 my-1 border border-borderColor bg-white hover:bg-[#ededed]" : "rounded-sm w-full py-3 my-1 border border-borderColor bg-tertiary hover:border-primary"}
              onClick={() => setMenu(stack.menu)}
            >
              <p className={menu === stack.menu ? "text-black hover:text-[#262626]" : "text-white"}>{stack.title}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};