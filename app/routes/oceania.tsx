import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import Buttonn from "~/components/button";

export async function loader() {
  const url = new URL("https://api.exchangerate.host/latest");
  const response = await fetch(url);
  const currency = await response.json();
  const url1 = new URL("https://restcountries.com/v3.1/region/oceania");
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
            <Button to={`/countries/${data[23].name.common}`}>AUD</Button>
            <div className="values text-[50px]">{currency.rates.AUD}</div>
            <Buttonn to={`/countries/${data[14].name.common}`}>
              New Zealand dollar
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.NZD}</div>
            <Buttonn to={`/countries/${data[16].name.common}`}>
              Papua New Guinea{" "}
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.PGK}</div>
            <Buttonn to={`/countries/${data[5].name.common}`}>
              Tongan pa’anga
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.TOP}</div>
            <Button to={`/countries/${data[14].name.common}`}>
              Samoan tala{" "}
            </Button>
            <div className="values text-[50px]">{currency.rates.WST}</div>
            <br />
            <h1 className="values text-[50px]">compared to euro</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
