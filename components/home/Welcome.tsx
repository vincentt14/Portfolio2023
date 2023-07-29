import { Typewriter } from "react-simple-typewriter";

import CustomButton from "@/components/shared/CustomButton";

export const Welcome = () => {
  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        Hi, My Name is <span className="block font-bold text-white text-4xl mt-1 lg:text-5xl">Vincent.</span>
      </h1>
      <hr className="w-28 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />
      <h2 className="font-light text-primary text-lg mb-5 lg:text-2xl mt-2">
        I am a{" "}
        <span style={{ color: "white", fontWeight: "500" }}>
          <Typewriter loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={70} delaySpeed={1500} words={["FrontEnd Engineer.", "Web Developer.", "Next Developer.", "React Developer.", "Laravel Developer.", "JavaScript Developer.", "Programmer."]} />
        </span>
      </h2>
      <p className="text-primary max-w-md text-justify font-mono">
        "Keep Moving Forward Despite How Long It Take to Understand a Very Simple Thing."
        <span className="block text-slate-200 mt-1">- Norbertus Dewa Rucci.</span>
      </p>
      <div className="flex my-3 gap-x-5">
        <CustomButton btnType="button" title="About Me" to="/playingNow" containerStyles="border-black bg-white hover:bg-[#ededed]" textStyles="text-black hover:text-[#262626]" />
        <CustomButton btnType="button" title="Get In Touch" to="/adminDashboard" containerStyles=" border-borderColor bg-tertiary hover:border-primary" textStyles="text-white" />
      </div>
    </>
  );
};