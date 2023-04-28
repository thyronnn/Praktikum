import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import Buttonn from "~/components/button";
import { FaBeer } from "react-icons/fa";
import React from "react";
class Question extends React.Component {
  render() {
    return (
      <Button>
        {" "}
        Lets go for a <FaBeer />?{" "}
      </Button>
    );
  }
}

export async function loader() {
  const url = new URL("https://api.exchangerate.host/latest");
  const response = await fetch(url);
  const currency = await response.json();
  const url1 = new URL("https://restcountries.com/v3.1/region/europe");
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
            <Button to={`/countries/${data[50].name.common}`}>GBP</Button>
            <div className="values text-[50px]">{currency.rates.GBP}</div>
            <Buttonn to={`/countries/${data[12].name.common}`}>
              Danish krone
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.DKK}</div>
            <Buttonn to={`/countries/${data[48].name.common}`}>
              Swiss franc
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.CHF}</div>
            <Buttonn to={`/countries/${data[27].name.common}`}>
              Bulgarian lev.
            </Buttonn>
            <div className="values text-[50px]">{currency.rates.BGN}</div>
            <Button to={`/countries/${data[17].name.common}`}>Złoty</Button>
            <div className="values text-[50px]">{currency.rates.PLN}</div>
            <br />
            <h1 className="values text-[50px]">compared to euro</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
