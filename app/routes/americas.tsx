import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import Buttonn from "~/components/button";

export async function loader() {
  const url = new URL("https://api.exchangerate.host/latest");
  const response = await fetch(url);
  const currency = await response.json();
  const url1 = new URL("https://restcountries.com/v3.1/region/americas");
  const response1 = await fetch(url1);
  const data = await response1.json();
  return json({ currency, data });
}

export default function Currencies() {
  const { currency, data } = useLoaderData();
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
            <Button to={`/countries/${data[0].name.common}`}>USD</Button>
            <div className="values text-[50px]">{currency.rates.USD}</div>
            <Buttonn to={`/countries/${data[13].name.common}`}>
              Canadian dollar
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.CAD}</div>
            <Buttonn to={`/countries/${data[41].name.common}`}>Brazil</Buttonn>
            <div className="values text-[50px]">{currency.rates.BRL}</div>
            <Buttonn to={`/countries/${data[34].name.common}`}>sol</Buttonn>
            <div className="values text-[50px]">{currency.rates.PEN}</div>
            <Button to={`/countries/${data[5].name.common}`}>
              Chilean peso
            </Button>
            <div className="values text-[50px]">{currency.rates.CLP}</div>
            <br />
            <h1 className="values text-[50px]">compared to euro</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
