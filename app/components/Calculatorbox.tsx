import { Link } from "@remix-run/react";

export default function BlogContainer({ text, überschrift }: any) {
  return (
    <div>
      <div className="flex flex-col bg-white">
        <div className="p-4 gap-2 mr-32 ml-32 mt-5 font-semibold border-2 border-black rounded-lg text-[20px]">
          <h1 className="text-[30px]">{überschrift}</h1>
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
}
