import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

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
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1500}
            words={["FrontEnd Engineer.", "Web Developer.", "Next Developer.", "React Developer.", "Laravel Developer.", "JavaScript Developer.", "Programmer."]}
          />
        </span>
      </h2>
      <p className="text-primary max-w-lg text-justify font-mono">
        &quot;Keep Moving Forward Despite How Long It Take to Understand a Very Simple Thing.&quot;
        <span className="block text-slate-200 mt-1">- Norbertus Dewa Rucci.</span>
      </p>
      <div className="grid grid-cols-2 my-3 gap-x-2 lg:max-w-lg">
        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
          <button type="button" className="w-full my-4 py-3 px-6 rounded-md font-semibold border border-black bg-white hover:bg-[#ededed]">
            <span className="text-black hover:text-[#262626]">About Me</span>
          </button>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
          <button type="button" className="w-full my-4 py-3 px-6 rounded-md font-semibold border border-borderColor bg-tertiary hover:border-primary">
            <span className="text-white">Get In Touch</span>
          </button>
        </Link>
      </div>
    </>
  );
};
