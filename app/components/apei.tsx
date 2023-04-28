import { Link } from "@remix-run/react";

export default function sdsdsdsds({ children, to }: any) {
  return (
    <Link
      className="text-center hover:animate-pulse hover:animate-bounce rounded-full border-black bg-black font-bold text-white transition transform duration-500 ease-in-out hover:bg-white hover:text-black 
    text-[60px] transform transition duration-500 hover:scale-125 flex justify-center w-[600px]"
      to={to}
    >
      {children}
    </Link>
  );
}
