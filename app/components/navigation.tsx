import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <div className="flex bg-white/20 gap-6 justify-evenly shadow-xl">
      <a
        className="px-10 m-5 text-center hover:animate-pulse hover:animate-bounce rounded-full border-black bg-black font-bold text-white transition transform duration-500 ease-in-out  hover:border-black hover:bg-white hover:text-black 
    text-[50px] transform transition duration-500 hover:scale-125"
        href="/about"
      >
        about
      </a>
      <a
        className="px-10 m-5 text-center hover:animate-pulse hover:animate-bounce rounded-full border-black bg-black font-bold text-white transition transform duration-500 ease-in-out  hover:border-black hover:bg-white hover:text-black 
        text-[50px] transform transition duration-500 hover:scale-125"
        href="/currencies"
      >
        menu
      </a>
      <a
        className="px-10 m-5 text-center hover:animate-pulse hover:animate-bounce rounded-full border-black bg-black font-bold text-white transition transform duration-500 ease-in-out  hover:border-black hover:bg-white hover:text-black 
        text-[50px] transform transition duration-500 hover:scale-125"
        href="/bingchilling"
      >
        comment
      </a>
      <a
        className="px-10 m-5 text-center hover:animate-pulse hover:animate-bounce rounded-full border-black bg-black font-bold text-white transition transform duration-500 ease-in-out  hover:border-black hover:bg-white hover:text-black 
        text-[50px] transform transition duration-500 hover:scale-125"
        href="/honse"
      >
        honse
      </a>
    </div>
  );
}
