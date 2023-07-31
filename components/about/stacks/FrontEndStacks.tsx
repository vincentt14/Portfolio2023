"use client";

import { toast } from "react-hot-toast";
import { SiNextdotjs, SiReact, SiRedux, SiBootstrap } from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript, BiLogoTailwindCss, BiLogoCss3, BiLogoHtml5 } from "react-icons/bi";

export const FrontEndStacks = () => {
  const stacks = [
    {
      title: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      title: "React.js",
      icon: <SiReact />,
    },
    {
      title: "Redux",
      icon: <SiRedux />,
    },
    {
      title: "TypeScript",
      icon: <BiLogoTypescript />,
    },
    {
      title: "JavaScript",
      icon: <BiLogoJavascript />,
    },
    {
      title: "Tailwind CSS",
      icon: <BiLogoTailwindCss />,
    },
    {
      title: "Bootstrap",
      icon: <SiBootstrap />,
    },
    {
      title: "CSS3",
      icon: <BiLogoCss3 />,
    },
    {
      title: "HTML5",
      icon: <BiLogoHtml5 />,
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
