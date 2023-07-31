"use client";

import Swal from "sweetalert2";

import CustomButton from "../shared/CustomButton";

interface ICertif {
  name?: string;
  from?: string;
  issued?: string;
  credential?: string;
  img?: string;
  title: string;
  link: string;
}

export const Certificate = () => {
  const expertCerticiates = [
    {
      name: "React Web Developer Expert",
      from: "Dicoding Indonesia",
      issued: "Issued Feb 2023·Expires Feb 2026",
      credential: "Credential ID JMZVNL38JPN9",
      title: "Go to Credential Page💳",
      link: "https://www.dicoding.com/certificates/JMZVNL38JPN9",
      img: "/certif/dicoding_reactExpert.jpg",
    },
    {
      name: "FrontEnd Web Developer Expert",
      from: "Dicoding Indonesia",
      issued: "Issued Nov 2022·Expires Nov 2025",
      credential: "Credential ID RVZKKOJ44ZD5",
      title: "Go to Credential Page💳",
      link: "https://www.dicoding.com/certificates/RVZKKOJ44ZD5",
      img: "/certif/dicoding_frontEndExpert.jpg",
    },
  ];

  const otherCertificates = {
    title: "View all my Certificates🏆",
    link: "https://www.linkedin.com/in/vincent-240775185/details/certifications/",
  };

  const onHandleClick = (certif: ICertif) => {
    Swal.fire({
      title: certif.title,
      background: "#111",
      confirmButtonColor: "#000",
      showCloseButton: true,
      confirmButtonText: `<a href=${certif.link} target="blank">Open it in new tab!🔥</a>`,
      icon: "info",
    });
  };

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center">
      <h1 className=" font-bold text-white text-3xl mt-3 lg:text-4xl">My Certificate</h1>
      <p className="text-primary text-base my-3 lg:text-xl text-center">
        Here are 2 of my Expert Certification, to see all of my 12 certificates click{" "}
        <span onClick={() => onHandleClick(otherCertificates)} className="cursor-pointer text-slate-200 hover:text-white">
          here
        </span>
      </p>
      <div className="grid md:grid-cols-2 my-3 w-full lg:w-5/6">
        {expertCerticiates.map((expert) => (
          <div key={expert.img} className="md:mx-4 mb-6 md:mb-0 border border-borderColor bg-tertiary rounded-md">
            <div className="bg-black flex justify-center items-center border rounded-sm border-white shadow-lg">
              <img src={expert.img} alt={expert.name} className="w-full h-auto mx-auto rounded-sm" />
            </div>
            <div className="flex flex-col px-5">
              <p className="my-3 font-bold text-justify text-base lg:text-xl">{expert.name}</p>
              <p className="mb-2 text-primary">{expert.from}</p>
              <p className="mb-2 text-primary">{expert.issued}</p>
              <p className="mb-2 text-primary">{expert.credential}</p>

              <CustomButton btnType="submit" title="Show Credential" containerStyles="w-full border-borderColor bg-black hover:border-primary" textStyles="text-white" onClick={() => onHandleClick(expert)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
