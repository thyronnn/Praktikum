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
            <Button to="/europe">GBP</Button>
            <div className="values text-[50px]">{currency.rates.GBP}</div>
            <Buttonn to="/americas">Euro</Buttonn>
            <div className="values text-[50px]">{currency.rates.EUR}</div>
            <Buttonn to="/asia">Swiss franc</Buttonn>
            <div className="values text-[50px]">{currency.rates.CHF}</div>
            <Buttonn to="/Oceania">Bulgarian lev.</Buttonn>
            <div className="values text-[50px]">{currency.rates.BGN}</div>
            <Button to="/mideast">Złoty</Button>
            <div className="values text-[50px]">{currency.rates.PLN}</div>
            <br />
            <h1 className="values text-[50px]">compared to euro</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
