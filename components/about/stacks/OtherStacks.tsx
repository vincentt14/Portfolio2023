"use client";

import { toast } from "react-hot-toast";
import { SiGithub, SiVercel, SiPrisma, SiCypress, SiJest, SiFigma } from "react-icons/si";

export const OtherStacks = () => {
  const stacks = [
    {
      title: "GitHub",
      icon: <SiGithub />,
    },
    {
      title: "Prisma",
      icon: <SiPrisma />,
    },
    {
      title: "Vercel",
      icon: <SiVercel />,
    },
    {
      title: "Jest",
      icon: <SiJest />,
    },
    {
      title: "Cypress",
      icon: <SiCypress />,
    },
    {
      title: "Figma",
      icon: <SiFigma />,
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
