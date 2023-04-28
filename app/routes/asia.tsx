import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import Buttonn from "~/components/button";

export async function loader() {
  const url = new URL("https://api.exchangerate.host/latest");
  const response = await fetch(url);
  const currency = await response.json();
  const url1 = new URL("https://restcountries.com/v3.1/region/asia");
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
            <Button to={`/countries/${data[1].name.common}`}>
              Chinese Yen
            </Button>
            <div className="values text-[50px]">{currency.rates.CNY}</div>
            <Buttonn to={`/countries/${data[38].name.common}`}>
              Indian Rupee
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.INR}</div>
            <Buttonn to={`/countries/${data[17].name.common}`}>
              Japanese Yen
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.JPY}</div>
            <Buttonn to={`/countries/${data[48].name.common}`}>
              kuwati dinar
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.KWD}</div>
            <Button to={`/countries/${data[14].name.common}`}>
              Jordanian dinar
            </Button>
            <div className="values text-[50px]">{currency.rates.JOD}</div>
            <br />
            <h1 className="values text-[50px]">compared to euro</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
