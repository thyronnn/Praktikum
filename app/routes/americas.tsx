import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import Buttonn from "~/components/button";

export async function loader() {
  const url = new URL("https://api.exchangerate.host/latest");
  const response = await fetch(url);
  const currency = await response.json();
  return json({ currency });
}

export default function Currencies() {
  const { currency } = useLoaderData();
  return (
    <div>
      <div className="flex  items-center justify-center ">
        <div>
          <h1 className="underline text-[120px] flex justify-center underline-offset-8 font-semibold">
            Currencies
          </h1>
          <br />
          <br />
          <div className="flex justify-center text-center flex-col  ">
            <Button to="/europe">USD</Button>
            <div className="values text-[50px]">{currency.rates.USD}</div>
            <Buttonn to="/americas">Canadian dollar</Buttonn>
            <div className="values text-[50px]">{currency.rates.CAD}</div>
            <Buttonn to="/asia">Brazil</Buttonn>
            <div className="values text-[50px]">{currency.rates.BRL}</div>
            <Buttonn to="/Oceania">sol</Buttonn>
            <div className="values text-[50px]">{currency.rates.PEN}</div>
            <Button to="/mideast">Chilean peso</Button>
            <div className="values text-[50px]">{currency.rates.CLP}</div>
            <br />
            <h1 className="values text-[50px]">compared to euro</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
