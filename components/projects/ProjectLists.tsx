"use client";

import Swal from "sweetalert2";

import ReadMore from "../shared/ReadMore";
import CustomButton from "../shared/CustomButton";
import { SiBootstrap, SiCypress, SiFirebase, SiJest, SiLaravel, SiReact, SiRedux } from "react-icons/si";
import { BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";

export const ProjectLists = () => {
  const projects = [
    {
      name: "CBS",
      description:
        "CBS-Project is a Freelance Object Oriented React Project. A web based cinema booking system, users can check the availability and reserve multiple seats in selected movies, cinema manager can edit various of cinema package: Beanie, Deluxe and Classic, also have 2 types of payment methods. Created using React.js, Typescript, Tailwind and Firebase.",
      title: "Visit CBS? ☄️",
      link: "https://cbs-project.vercel.app/",
      img: "/project/cbs.jpg",
      stacks: [
        {
          name: "React.js",
          logo: <SiReact className="text-white w-6 h-6" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-white w-7 h-7" />,
        },
        {
          name: "Firebase",
          logo: <SiFirebase className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "DiaCare",
      description:
        "DiaCare is a web-based diagnose application to help people diagnose diabetes mellitus disease. Admin can set the diseases, symptoms med and rule base which will be used for the forward chaining method. This application also gives user bunch of information from medicine until advice to avoid or threat the disease. – Build using PHP Laravel and Tailwind CSS, Host using Hostinger | features : login, register, diagnose, track history, dashboards, crud symptoms, diseases, solutions, medicines, rule base.",
      title: "Visit DiaCare? ☄️",
      link: "https://github.com/vincentt14/DiaCare",
      img: "/project/diaCare.png",
      stacks: [
        {
          name: "Laravel",
          logo: <SiLaravel className="text-white w-7 h-7" />,
        },
        {
          name: "JavaScript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "ForumNGo",
      description:
        "ForumNGo is a web-based forum application to help people find some discussion or topic, user also can add discussion and discuss some topics together. – Build using React.js, Redux, Bootstrap, Testing with Jest and Cypress, Eslint – PropTypes. Connected to Dicoding API | features : login, register, create threads, leave comments.",
      title: "Visit ForumNGo? ☄️",
      link: "https://discussion-forum-test.vercel.app/",
      img: "/project/forumNGo.jpg",
      stacks: [
        {
          name: "React.js",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Redux",
          logo: <SiRedux className="text-white w-7 h-7" />,
        },
        {
          name: "Cypress",
          logo: <SiCypress className="text-white w-7 h-7" />,
        },
        {
          name: "Bootstrap",
          logo: <SiBootstrap className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "CoMoney",
      description:
        "CoMoney is a web-based financial management utility Application to help people manage their finances with income and expenditure dashboard features, savings targets with automatic calculations, and daily financial news. – Build using React.js React Router, React Context, Axios, Lazysizes, SweetAlert and Bootstrap | features: Record and monitor daily and monthly expenses and income, provides daily global financial news, create a savings plan, as well as display information on how much money should be set aside each month.",
      title: "Visit CoMoney? ☄️",
      link: "https://comoney-dicoding.web.app",
      img: "/project/coMoney.jpg",
      stacks: [
        {
          name: "React.js",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Bootstrap",
          logo: <SiBootstrap className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Open Space",
      description:
        "Open Space App is a web-based twitter look a like application where users can create some threads add comments and see parents threads. – Build using React.js, Redux, Eslint - Proptypes, Testing with Jest and Cypress. with Dicoding API | features : login, register, create talk, view talk parent, add comments.",
      title: "Visit Open Space? ☄️",
      link: "https://open-space-app-bice.vercel.app/",
      img: "/project/openSpace.jpg",
      stacks: [
        {
          name: "React.js",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Redux",
          logo: <SiRedux className="text-white w-7 h-7" />,
        },
        {
          name: "Jest",
          logo: <SiJest className="text-white w-7 h-7" />,
        },
        {
          name: "Bootstrap",
          logo: <SiBootstrap className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "NoteBook",
      description:
        "Note Book 2 is a web-based utility application where users can add some notes, archive it or edit it, this application also provides dark mode – Build using React.js, React Router, React Context, Hooks, Path & Query Params. Connected to Dicoding API | features : dark mode, change app language, login - register - logout, add note, delete note, archive note, search for notes.",
      title: "Visit NoteBook? ☄️",
      link: "https://note-book-app-2.vercel.app/",
      img: "/project/noteBook.jpg",
      stacks: [
        {
          name: "React.js",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "CSS3",
          logo: <BiLogoCss3 className="text-white w-7 h-7" />,
        },
      ],
    },
  ];

  const github = {
    title: "View all my Projects on GitHub🚀",
    link: "https://github.com/vincentt14",
  };

  const onHandleClick = (title: string, link: string) => {
    Swal.fire({
      title: title,
      background: "#111",
      confirmButtonColor: "#000",
      showCloseButton: true,
      confirmButtonText: `<a href=${link} target="blank">Open it in new tab!🔥</a>`,
      icon: "info",
    });
  };

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center">
      <h1 className="text-base font-medium text-primary md:text-xl text-center">
        Projects <span className="block font-bold text-white text-4xl mt-1 lg:text-5xl">Showcase</span>
      </h1>
      <hr className="w-36 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />
      <p className="text-primary text-base my-3 lg:text-xl text-center">
        Here are some of my Projects, to see all of my projects click{" "}
        <span onClick={() => onHandleClick(github.title, github.link)} className="cursor-pointer text-slate-200 hover:text-white">
          here
        </span>
      </p>
      <div className="grid md:grid-cols-2 my-3 w-full lg:w-5/6">
        {projects.map((project) => (
          <div key={project.img} className="md:mx-4 mb-6 border border-borderColor bg-tertiary rounded-md">
            <div className="bg-black flex justify-center items-center border rounded-sm border-borderColor shadow-lg">
              <img src={project.img} alt={project.name} className="w-full h-auto mx-auto rounded-sm"/>
            </div>
            <div className="flex flex-col px-5">
              <div className="flex items-center justify-between my-4">
                <p className="font-bold text-justify text-base lg:text-xl">{project.name}</p>
                <div className="flex gap-x-2">
                  {project.stacks.map((stack) => (
                    <div key={stack.name} className="w-11 h-11 bg-black border border-borderColor rounded-md flex items-center justify-center">
                      {stack.logo}
                    </div>
                  ))}
                </div>
              </div>
              <ReadMore textSlice={120} pStyle="mb-2 text-justify text-primary">
                {project.description}
              </ReadMore>
              <CustomButton btnType="submit" title="Go To Website" containerStyles="w-full border-borderColor bg-black hover:border-primary" textStyles="text-white" onClick={() => onHandleClick(project.title, project.link)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
