import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export async function loader() {
const url = new URL("https://api.coindesk.com/v1/bpi/currentprice.json");
const response = await fetch(url); //fetch ruft daten auf und wiedergibt sie//
const coindesk = await response.json();

return json({ Currencies });

}
    
export default function Currencies() {
    const { Currencies } = useLoaderData();
  return (
    <div>
        <h1 className="text-[100px]">coindesk</h1>
        <p>
            {Currencies.bpi.USD.rate}
        </p>
           
    <Form method="get">
        <button className="link" type="submit">Refresh price</button>
    </Form>
    </div>
  )
}
