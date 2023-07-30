import CustomButton from "../shared/CustomButton";

export const Info = () => {
  const contacts = [
    {
      href: "https://github.com/vincentt14",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/vincent-240775185/",
      label: "LinkedIn",
    },
  ];

  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        About Me <span className="block font-bold text-white text-4xl mt-1 lg:text-5xl">Who am I?</span>
      </h1>
      <hr className="w-28 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />
      <div className="lg:max-w-lg font-light text-primary text-lg">
        <p className="my-3">Hello! My name is Vincent, a Web Developer based in Indonesia.</p>

        <p className="my-3">
          I am a Fresh Graduate Informatics student who pursues and specializes in the field of web development. Someone who has a high motivation and passion in the studies of learning or building dynamic and interactive websites.
        </p>

        <p className="my-3">
          I'm currently focused on learning Front-End web development - <span className="text-white">Next.js</span>. I am also a freelancer while looking for a job.
        </p>
      </div>
      <hr className="w-36 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 lg:max-w-lg my-4 lg:my-0">
        {contacts.map((contact) => (
          <div key={contact.href}>
            <CustomButton btnType="button" title={contact.label} to={contact.href} containerStyles="!my-1 w-full border-borderColor bg-tertiary hover:border-primary" textStyles="text-white" />
          </div>
        ))}
        <div className="col-span-2 md:col-span-1">
          <CustomButton btnType="button" title="Instagram" to="https://www.instagram.com/_vincenttlim" containerStyles="!my-1 w-full border-borderColor bg-tertiary hover:border-primary" textStyles="text-white" />
        </div>
      </div>
    </>
  );
};
