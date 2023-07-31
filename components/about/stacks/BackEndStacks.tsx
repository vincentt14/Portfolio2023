"use client";

import { toast } from "react-hot-toast";
import { SiLaravel, SiPhp, SiFirebase, SiPlanetscale, SiExpress, SiNestjs } from "react-icons/si";

export const BackEndStacks = () => {
  const stacks = [
    {
      title: "Laravel",
      icon: <SiLaravel />,
    },
    {
      title: "PHP",
      icon: <SiPhp />,
    },
    // {
    //   title: "Express",
    //   icon: <SiExpress />,
    // },
    // {
    //   title: "Nest.js",
    //   icon: <SiNestjs />,
    // },
    {
      title: "PlanetScale",
      icon: <SiPlanetscale />,
    },
    {
      title: "Firebase",
      icon: <SiFirebase />,
    },
  ];

  const onHandleClick = (title: string) => {
    toast.success(`Skilled in ${title} `, {
      icon: "🔥",
      style: {
        border: "1px solid #3e3e3e",
        background: "#111",
        color: "#fff",
      },
    });
  };

  return (
    <>
      {stacks.map((stack) => (
        <div key={stack.title} className="p-3 md:p-4 border border-borderColor bg-tertiary rounded-sm hover:text-white cursor-pointer hover:border-primary" onClick={() => onHandleClick(stack.title)}>
          <p key={stack.title} className="flex justify-center items-center" title={stack.title}>
            {stack.icon}
          </p>
        </div>
      ))}
    </>
  );
};
