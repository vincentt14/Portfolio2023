"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import CustomButton from "../shared/CustomButton";

interface NavbarProps {
  handleThemeSwitch: () => void;
}

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const refHead = useRef<HTMLDivElement>(null);

  const onToggleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.onscroll = () => {
      const fixedNav: any = refHead.current?.offsetTop;

      if (window.pageYOffset > fixedNav) {
        refHead.current?.classList.add("navbar-fixed");
      } else {
        refHead.current?.classList.remove("navbar-fixed");
      }
    };
  }, []);

  return (
    <nav>
      <div ref={refHead} className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10 transition duration-100 ease-in-out pt-2">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href="/" className="cursor-pointer text-primary font-bold text-lg block py-6 hover:text-white">
                Vincent.
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button type="button" className={toggle === true ? "block absolute right-4 hamburger-active lg:hidden" : "block absolute right-4 lg:hidden"} onClick={onToggleClick}>
                <span className="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
              </button>

              <nav
                className={
                  toggle === true
                    ? " absolute py-5 bg-tertiary border border-borderColor lg:border-0 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:py-0"
                    : " hidden lg:block lg:static lg:bg-transparent lg:max-w-full"
                }
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link href="/" className="cursor-pointer text-primary text-base py-2 mx-8 flex group-hover:text-white" onClick={onToggleClick}>
                      Home
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/playingNow" className="cursor-pointer text-primary text-base py-2 mx-8 flex group-hover:text-white" onClick={onToggleClick}>
                      About Me
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/userDashboard" className="cursor-pointer text-primary text-base py-2 mx-8 flex group-hover:text-white" onClick={onToggleClick}>
                      projects
                    </Link>
                  </li>

                  <li className="group">
                    <Link href="/adminDashboard" className="cursor-pointer text-primary text-base py-2 mx-8 flex group-hover:text-white" onClick={onToggleClick}>
                      Contact Me
                    </Link>
                  </li>

                  <li className="group">
                    <CustomButton to="/" btnType="button" title="Resume" containerStyles="ml-5 lg:ml-0 border-borderColor bg-tertiary hover:border-primary lg:my-0 py-[10px]" textStyles="text-white" />
                  </li>

                  {/* <li className="group">
                    <CustomButton btnType="button" title="Login" to="/login" containerStyles="border-black bg-white hover:bg-[#ededed]" textStyles="text-black hover:text-[#262626]" />
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
