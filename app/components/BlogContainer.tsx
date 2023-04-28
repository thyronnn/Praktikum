import { Link } from "@remix-run/react";

export default function BlogContainer({
  text,
  überschrift,
  titel,
  name,
  input,
}: any) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-white/50 gap-2  mt-5 font-bold border-2 border-black rounded-lg w-full text-[20px]">
          <h1 className="text-[30px]">{überschrift}</h1>
          <div>
            <b>by:</b> {name}
          </div>
          <div>
            {" "}
            <b>title:</b>
            {titel}
          </div>
          <div>
            <b>message:</b>
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
