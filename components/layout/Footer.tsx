import Link from "next/link";

import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { toast } from "react-hot-toast";

interface IContact {
  label: string;
  target: string;
}

export const Footer = () => {
  const shortcuts = [
    {
      href: "https://github.com/vincentt14",
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/vincent-240775185/",
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/_vincenttlim",
      label: "Instagram",
    },
  ];

  const stacks = [
    {
      name: "Next.js",
      logo: <SiNextdotjs className="text-white w-8 h-8" />,
    },
    {
      name: "Typescript",
      logo: <BiLogoTypescript className="text-white w-8 h-8" />,
    },
    {
      name: "Tailwind",
      logo: <BiLogoTailwindCss className="text-white w-8 h-8" />,
    },
  ];

  const contacts = [
    {
      label: "Email",
      target: "stefanuslim844@gmail.com",
    },
    {
      label: "Discord U Id",
      target: "365438488679546881",
    },
  ];

  const onHandleCopy = (contact: IContact) => {
    navigator.clipboard.writeText(contact.target);
    toast.success(`${contact.label} copied to the clipboard.`, {
      style: {
        border: '1px solid #3e3e3e',
        background: "#111",
        color: "#fff",
      },
    });
  };

  return (
    <footer className="border-t border-borderColor bg-tertiary pt-20 pb-5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-5 w-full flex-col place-items-center font-medium md:flex md:w-1/3">
            <ul>
              <h2 className="py-1 text-4xl font-bold text-white">Vincent.</h2>
              <hr className="w-[150px] my-3 p-1 bg-black border border-borderColor rounded-sm" />
              <h3 className="my-4 text-2xl font-bold text-white">Contact Me</h3>
              {contacts.map((contact) => (
                <div className="flex gap-2 my-2">
                  <p className="py-2 text-primary">{contact.label}:</p>
                  <button className="p-2 border border-borderColor rounded-sm text-primary font-mono hover:text-white hover:border-primary" onClick={() => onHandleCopy(contact)}>
                    {contact.target}
                  </button>
                </div>
              ))}
            </ul>
          </div>
          <div className="mb-5 w-full flex-col place-items-center md:flex md:w-1/3">
            <ul className="text-slate-400">
              <h3 className="mb-5 mt-4 text-xl font-semibold text-white">Reach Me Out</h3>
              {shortcuts.map((shortcut) => (
                <li key={shortcut.href}>
                  <Link href={shortcut.href} target="blank" className="mb-2 inline-block text-base text-primary hover:text-white">
                    {shortcut.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-5 w-full flex-col place-items-center md:flex md:w-1/3">
            <ul className="text-slate-400">
              <h3 className="mb-5 mt-4 text-xl font-semibold text-white">Resume</h3>
              <li>
                <a href="/" target="blank" className="mb-2 inline-block text-base text-primary hover:text-white">
                  Download
                </a>
              </li>
              <li className="mt-14">
                <Link href="/" download="Resume_Vincent" className="mb-2 inline-block font-light text-primary">
                  © 2023 Vincent
                </Link>
                <div className="flex gap-x-2">
                  {stacks.map((stack) => (
                    <div key={stack.name} className="w-11 h-11 bg-black border border-borderColor rounded-md flex items-center justify-center">
                      {stack.logo}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};