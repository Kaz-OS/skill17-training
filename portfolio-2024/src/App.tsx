// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Header from "./components/header";
import { api } from "./lib/api";
// import { api } from "./lib/api";

export default function App() {
  const { data = [] } = useQuery({
    queryKey: ["hello"],
    staleTime: 0,
    queryFn: async () => {
      const { data } = await api.project.get();
      return data;
    },
  });

  const links = [
    { icon: FaBehance, href: "#", color: "#1869ff" },
    { icon: FaDribbble, href: "#", color: "#e51a68" },
    { icon: FaLinkedinIn, href: "#", color: "#007bb6" },
    { icon: FaFacebookF, href: "#", color: "#3a5898" },
    { icon: FaInstagram, href: "#", color: "#13578a" },
    { icon: FaTwitter, href: "#", color: "#56acef" },
  ];

  return (
    <main className="h-full mx-auto w-full max-w-screen-2xl px-2.5 md:px-24">
      <Header />
      <section className="flex justify-between mt-30 mb-30">
        <div>
          <span className="text-4xl ">Hello, je suis...</span>
          <h1 className="text-5xl font-bold">Lewis Nathaniel</h1>
          <span className="text-2xl">UI & UX</span>
          <ul className="flex mb-6 mt-5 gap-2">
            {links.map((link, index) => (
              <li key={index} className="p-2" style={{ backgroundColor: link.color }}>
                <a href={link.href}>{<link.icon className="size-8 text-white fill-white" />}</a>
              </li>
            ))}
          </ul>
          <a className="uppercase font-bold border-[2.5px] rounded-3xl py-2 px-4" href="">
            contact
          </a>
        </div>
        <img src="/assets/images/undraw_innovative_b409.svg" alt="" />
      </section>
      <section className="grid grid-cols-3 gap-5 mb-50">
        {data?.map((project, index) => (
          <div key={index} className="shadow-md rounded-2xl">
            <img className="rounded-t-2xl" src={`/assets/images/projects/${project.IMAGE}`} alt="projet" />
            <div className="p-3">
              <p>{project.TypeNOM}</p>
              <h3 className="font-bold">{project.ProjetNOM}</h3>
            </div>
          </div>
        ))}
      </section>
      <section className="flex gap-10">
        <img className="h-100" src="/assets/images/undraw_Designer_by46.svg" alt="" />
        <div className="">
          <h2 className="text-5xl font-bold">À PROPOS...</h2>
          <h3 className="text-6xl font-bold text-[#e0e0e0] mb-10">QUI SUIS-JE ?</h3>
          <p className="text-xl text-[#6a696b] tracking-wide mb-10">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
            semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien
            ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
            fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec
            non enim in turpis pulvinar facilisis. Ut felis.
          </p>
          <a className="uppercase font-bold border-[2.5px] rounded-3xl py-2 px-4" href="#">
            CONTACT
          </a>
        </div>
      </section>
      <section className="relative left-1/2 mt-60 w-screen -translate-x-1/2 bg-[#332f30]">
        <img
          className="block h-32 w-full object-cover object-center md:h-48"
          src="/assets/images/section-back.svg"
          alt="background"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-screen-2xl px-2.5 text-center md:px-24">
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto alias repellat, adipisci quos fugiat
              voluptatum illum enim amet doloribus quia quasi, praesentium temporibus quam totam eveniet? Enim dolorem
              mollitia voluptatibus?
            </p>
          </div>
        </div>
      </section>
      <section className="relative z-10 -mt-10">
        <div className="flex flex-col items-center justify-center">
          <img className="w-30 rounded-full border-4 border-white" src="/assets/images/lena.jpg" alt="" />
          <h2>Lena M. Brooks</h2>
          <span>Marketing House</span>
        </div>
      </section>
    </main>
  );
}
