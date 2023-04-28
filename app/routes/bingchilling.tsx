/* Imports----------------------------------------------------------- */
import { Form, useLoaderData } from "@remix-run/react";
import { ActionArgs } from "@remix-run/node";
import Button from "~/components/button";
import supabase from "utils/supabase";
import BlogContainer from "~/components/BlogContainer";
/* Imports---------------------------------------------------------- */
/* Loaderfunction-------------------------------------------------- */
export const loader = async ({ request }: any) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const dateien = console.log("hakflsdfgnlkfd");

  /* If-Abfrage-------------------------------------------------- */
  if (search) {
    const { data } = await supabase
      .from("bingchilling")
      .select()
      .ilike("titel | text", `%${search}%`);

    return { data };
  }

  /* If-Abfrage-------------------------------------------------- */

  const { data, error } = await supabase.from("bingchilling").select();
  return { data };
};

/* Loaderfunction-------------------------------------------------- */

/* action function */
export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const titel = formData.get("titel");
  const text = formData.get("text");
  await supabase.from("bingchilling").insert([{ name, titel, text }]);

  return {};
}
/* action function */
export default function bingchilling() {
  const { data } = useLoaderData();
  return (
    <div className="flex flex-col justify-center items-center">
      <Form className="w-[900px]" method="post">
        {/*-----------------------Container für name und Titel-------------*/}
        <div className="flex flex-row justify-center gap-2 mt-2">
          {/* ----------------------Container für Name---------------------- */}
          <div className="container">
            <label className="font-bold">Name</label>
            <input
              type="text"
              // name...
              name="name"
              className=" w-[800px] text-[50px] flex flex-col placeholder-black/60 placeholder-bold border-2 border-black rounded-lg  bg-white/30 font-bold"
              placeholder="enter your name"
            />
          </div>
          {/*-----------------------Container für Name----------------------  */}
          {/*-----------------------Container für Titel----------------------  */}
          <div className="container">
            <label className="font-bold text-black">Titel</label>
            <input
              aria-label="hallo"
              type="text"
              name="titel"
              // name...
              className=" w-[800px] text-[50px] flex flex-col placeholder-black/60 placeholder-bold border-2 border-black rounded-lg  bg-white/30 font-bold"
              placeholder="what is your title?"
            />
          </div>
          {/*-----------------------Container für Titel----------------------  */}
        </div>
        <div className="">
          {/*--------------------Container für die Narchicht---------------*/}
          <div className="mt-10 w-full">
            <label className="font-bold">Inhalt</label>
            <textarea
              className="bg-white/30 text-[25px] border-2 h-[200px] border-black rounded-lg placeholder-black/60 text font-bold justify-start flex w-[1000px]"
              name="text"
              cols={5}
              placeholder="enter your text"
            ></textarea>
          </div>
          {/*--------------------Container für die Narchicht---------------*/}
          {/*--------------------Container für Save Button---------------*/}
          <div className="text-5 flex justify-end w-[1000px]">
            <button className="text-[30px]  border border-black rounded-full bg-black text-white font-bold w-60 m-3 ">
              Save changes
            </button>
          </div>
          {/*--------------------Container für Save Button----------------*/}
          {/*------------------------Container für Searchbar------------ */}
        </div>
      </Form>

      <Form method="get" className="flex gap-2 text-[30px]">
        <input
          className=" border border-black rounded-lg w-96 placeholder-black/60 bg-white/20"
          type="text"
          name="search"
          placeholder="Nach Einträgen suchen..."
        />
        <button className="border border-black rounded-full  bg-black w-full text-white font-bold">
          search
        </button>
      </Form>
      <div className="flex flex-col gap-2 px-32 py-32 text-[100px]">
        {data.map((bingchilling: any, index: any) => (
          <BlogContainer
            className=""
            key={index}
            name={bingchilling.name}
            titel={bingchilling.titel}
            text={bingchilling.text}
          />
        ))}

        {data.length > 0 ? (
          <p className="font-bold text-[30px] border bg-white/30 border-black w-96 rounded-full flex justify-center items-center text-center">
            {data.length} entries found
          </p>
        ) : (
          <p className="font-bold text-[20px]">no entries found</p>
        )}
      </div>
      {/*------------------------Container für Searchbar------------ */}
    </div>
  );
}
