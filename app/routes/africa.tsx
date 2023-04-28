import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import Buttonn from "~/components/button";

export async function loader() {
  const url = new URL("https://api.exchangerate.host/latest");
  const response = await fetch(url);
  const currency = await response.json();
  const url1 = new URL("https://restcountries.com/v3.1/region/africa");
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
            <Button to={`/countries/${data[7].name.common}`}>
              Tunisian dinar
            </Button>
            <div className="values text-[50px]">{currency.rates.TND}</div>
            <Buttonn to={`/countries/${data[24].name.common}`}>
              Libyan dinar
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.LYD}</div>
            <Buttonn to={`/countries/${data[51].name.common}`}>
              Moroccan dirham
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.MAD}</div>
            <Buttonn to={`/countries/${data[32].name.common}`}>
              Ghanaian cedi
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.GHS}</div>
            <Button to={`/countries/${data[56].name.common}`}>
              Seychellois rupee
            </Button>
            <div className="values text-[50px]">{currency.rates.SCR}</div>
            <br />
            <h1 className="values text-[50px]">compared to euro</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
